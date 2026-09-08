import Gallery from "../models/Gallery.js";
import cloudinary from "../config/cloudinary.js";

// Helper for cloudinary upload via memory buffer
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "alliance_gallery" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      },
    );
    uploadStream.end(buffer);
  });
};

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
export const getGalleryItems = async (req, res) => {
  try {
    const galleryItems = await Gallery.find({}).sort({ createdAt: -1 });
    res.json(galleryItems);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Create a new gallery item
// @route   POST /api/admin/gallery
// @access  Private (Admin)
export const createGalleryItem = async (req, res) => {
  const { title, category, description } = req.body;

  if (!title || !category) {
    return res.status(400).json({ message: "Title and category are required" });
  }

  if (!req.file) {
    return res.status(400).json({ message: "Image file is required" });
  }

  try {
    const cloudinaryResult = await uploadToCloudinary(req.file.buffer);

    const galleryItem = await Gallery.create({
      title,
      category,
      description,
      imageUrl: cloudinaryResult.secure_url,
      cloudinaryId: cloudinaryResult.public_id,
    });

    res
      .status(201)
      .json({ message: "Gallery item created successfully", galleryItem });
  } catch (error) {
    console.error("Gallery Create Error:", error);
    res.status(500).json({
      message:
        error.name === "ValidationError"
          ? "Invalid Form Data submitted."
          : "Server Error",
      error: error.message,
    });
  }
};

// @desc    Update a gallery item
// @route   PUT /api/admin/gallery/:id
// @access  Private (Admin)
export const updateGalleryItem = async (req, res) => {
  const { title, category, description } = req.body;

  try {
    const galleryItem = await Gallery.findById(req.params.id);

    if (!galleryItem) {
      return res.status(404).json({ message: "Gallery item not found" });
    }

    if (title) galleryItem.title = title;
    if (category) galleryItem.category = category;
    // Description can be cleared out if someone natively erases it
    if (description !== undefined) galleryItem.description = description;

    let oldCloudinaryId = null;

    if (req.file) {
      oldCloudinaryId = galleryItem.cloudinaryId;

      const cloudinaryResult = await uploadToCloudinary(req.file.buffer);

      galleryItem.imageUrl = cloudinaryResult.secure_url;
      galleryItem.cloudinaryId = cloudinaryResult.public_id;
    }

    const updatedItem = await galleryItem.save();

    if (oldCloudinaryId && req.file) {
      try {
        await cloudinary.uploader.destroy(oldCloudinaryId);
      } catch (cleanupError) {
        console.error("Failed to cleanup old cloudinary image:", cleanupError);
      }
    }

    res.json({
      message: "Gallery item updated successfully",
      galleryItem: updatedItem,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Delete a gallery item
// @route   DELETE /api/admin/gallery/:id
// @access  Private (Admin)
export const deleteGalleryItem = async (req, res) => {
  try {
    const galleryItem = await Gallery.findById(req.params.id);

    if (!galleryItem) {
      return res.status(404).json({ message: "Gallery item not found" });
    }

    const cloudinaryId = galleryItem.cloudinaryId;

    await galleryItem.deleteOne();

    if (cloudinaryId) {
      try {
        await cloudinary.uploader.destroy(cloudinaryId);
      } catch (cleanupError) {
        console.error(
          "Failed to cleanup cloudinary image on delete:",
          cleanupError,
        );
      }
    }

    res.json({ message: "Gallery item removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
