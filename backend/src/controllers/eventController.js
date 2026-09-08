import Event from "../models/Event.js";
import cloudinary from "../config/cloudinary.js";

// Helper for cloudinary upload via memory buffer
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "alliance_events" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      },
    );
    uploadStream.end(buffer);
  });
};

// @desc    Get all events
// @route   GET /api/events
// @access  Public
export const getEvents = async (req, res) => {
  try {
    // Sort events by newest creation date
    const events = await Event.find({}).sort({ createdAt: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Create a new event
// @route   POST /api/admin/events
// @access  Private (Admin)
export const createEvent = async (req, res) => {
  const { title, date, location, category, description } = req.body;

  if (!title || !date || !location || !category || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!req.file) {
    return res.status(400).json({ message: "Event image is required" });
  }

  try {
    const cloudinaryResult = await uploadToCloudinary(req.file.buffer);

    const event = await Event.create({
      title,
      date,
      location,
      category,
      description,
      imageUrl: cloudinaryResult.secure_url,
      cloudinaryId: cloudinaryResult.public_id,
    });

    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Update an existing event
// @route   PUT /api/admin/events/:id
// @access  Private (Admin)
export const updateEvent = async (req, res) => {
  const { title, date, location, category, description } = req.body;

  try {
    const event = await Event.findById(req.params.id);

    if (event) {
      const oldCloudinaryId = event.cloudinaryId;
      let newCloudinaryId = null;
      let newImageUrl = null;

      // 1 & 2. Upload NEW image to Cloudinary FIRST
      if (req.file) {
        try {
          const cloudinaryResult = await uploadToCloudinary(req.file.buffer);
          newImageUrl = cloudinaryResult.secure_url;
          newCloudinaryId = cloudinaryResult.public_id;
        } catch (uploadError) {
          // Case 1: Upload fails. Safe to return, nothing modified yet in DB or Cloudinary.
          return res
            .status(500)
            .json({
              message: "Image upload failed",
              error: uploadError.message,
            });
        }
      }

      // 3. Update details on the document instance
      event.title = title || event.title;
      event.date = date || event.date;
      event.location = location || event.location;
      event.category = category || event.category;
      event.description = description || event.description;

      if (req.file) {
        event.imageUrl = newImageUrl;
        event.cloudinaryId = newCloudinaryId;
      }

      // 4. Save Event to MongoDB
      let updatedEvent;
      try {
        updatedEvent = await event.save();
      } catch (saveError) {
        // Case 2: DB Save fails but image was uploaded -> Delete orphaned new image
        if (newCloudinaryId) {
          try {
            await cloudinary.uploader.destroy(newCloudinaryId);
            console.log(
              "Cleaned up orphaned Cloudinary image after MongoDB save failed:",
              newCloudinaryId,
            );
          } catch (cleanupError) {
            console.error(
              "Failed to clean up orphaned image:",
              cleanupError.message,
            );
          }
        }
        return res
          .status(500)
          .json({
            message: "Failed to save event data",
            error: saveError.message,
          });
      }

      // 5. AFTER event.save() succeeds: Cleanup OLD Cloudinary Image
      if (req.file && oldCloudinaryId) {
        try {
          await cloudinary.uploader.destroy(oldCloudinaryId);
        } catch (cleanupOldError) {
          // Case 3: Old image cleanup fails -> Only log it, Event Update remains successful
          console.error(
            "Old event image cleanup failed, but database was successfully updated:",
            cleanupOldError.message,
          );
        }
      }

      return res.json({
        message: "Event updated successfully",
        event: updatedEvent,
      });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({ message: "Event not found (invalid ID)" });
    }
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Delete an event
// @route   DELETE /api/admin/events/:id
// @access  Private (Admin)
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (event) {
      if (event.cloudinaryId) {
        await cloudinary.uploader.destroy(event.cloudinaryId);
      }
      await event.deleteOne();
      res.json({ message: "Event deleted successfully" });
    } else {
      res.status(404).json({ message: "Event not found" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(404).json({ message: "Event not found (invalid ID)" });
    }
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
