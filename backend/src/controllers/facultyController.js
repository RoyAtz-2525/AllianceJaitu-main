import Faculty from "../models/Faculty.js";
import cloudinary from "../config/cloudinary.js";
import mongoose from "mongoose";

// ==========================================
// CREATE FACULTY
// ==========================================
export const createFaculty = async (req, res) => {
  try {
    const {
      name,
      role,
      department,
      description,
      experience,
      specialization,
      accent,
    } = req.body;

    // Validate text fields
    if (
      !name ||
      !role ||
      !department ||
      !description ||
      !experience ||
      !specialization ||
      !accent
    ) {
      return res.status(400).json({
        message: "All text fields are required",
      });
    }

    // Validate accent
    if (!["blue", "orange"].includes(accent)) {
      return res.status(400).json({
        message: "Invalid accent color",
      });
    }

    // Validate image
    if (!req.file) {
      return res.status(400).json({
        message: "Faculty image is required",
      });
    }

    // Upload image to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "alliance_faculty",
      },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary Upload Error:", error);

          return res.status(500).json({
            message: "Image upload failed",
          });
        }

        try {
          // IMPORTANT:
          // Create a NEW document for every faculty
          const newFaculty = new Faculty({
            name,
            role,
            department,
            description,
            experience,
            specialization,
            accent,
            imageUrl: result.secure_url,
            cloudinaryId: result.public_id,
          });

          await newFaculty.save();

          return res.status(201).json({
            message: "Faculty created successfully",
            faculty: newFaculty,
          });
        } catch (dbError) {
          console.error("Database save failed:", dbError);

          // Remove Cloudinary image if DB save fails
          try {
            await cloudinary.uploader.destroy(result.public_id);
          } catch (deleteError) {
            console.error(
              "Failed to cleanup Cloudinary image:",
              deleteError
            );
          }

          if (dbError.name === "ValidationError") {
            const messages = Object.values(dbError.errors).map(
              (error) => error.message
            );

            return res.status(400).json({
              message: "Validation error",
              error: messages,
            });
          }

          return res.status(500).json({
            message: "Failed to save faculty record",
          });
        }
      }
    );

    uploadStream.end(req.file.buffer);
  } catch (error) {
    console.error("Server Error creating faculty:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// ==========================================
// GET ALL FACULTY
// ==========================================
export const getFacultyItems = async (req, res) => {
  try {
    const facultyList = await Faculty.find({})
      .sort({ createdAt: -1 });

    return res.status(200).json(facultyList);
  } catch (error) {
    console.error("Error fetching faculty items:", error);

    return res.status(500).json({
      message: "Server Error",
    });
  }
};

// ==========================================
// UPDATE FACULTY
// ==========================================
export const updateFaculty = async (req, res) => {
  try {
    const facultyId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(facultyId)) {
      return res.status(400).json({
        message: "Invalid faculty ID",
      });
    }

    const faculty = await Faculty.findById(facultyId);

    if (!faculty) {
      return res.status(404).json({
        message: "Faculty not found",
      });
    }

    const {
      name,
      role,
      department,
      description,
      experience,
      specialization,
      accent,
    } = req.body;

    // Validate fields
    if (
      !name ||
      !role ||
      !department ||
      !description ||
      !experience ||
      !specialization ||
      !accent
    ) {
      return res.status(400).json({
        message: "All text fields are required",
      });
    }

    // Validate accent
    if (!["blue", "orange"].includes(accent)) {
      return res.status(400).json({
        message: "Invalid accent color",
      });
    }

    // ==========================================
    // UPDATE WITHOUT NEW IMAGE
    // ==========================================
    if (!req.file) {
      faculty.name = name;
      faculty.role = role;
      faculty.department = department;
      faculty.description = description;
      faculty.experience = experience;
      faculty.specialization = specialization;
      faculty.accent = accent;

      await faculty.save();

      return res.status(200).json({
        message: "Faculty updated successfully",
        faculty,
      });
    }

    // ==========================================
    // UPDATE WITH NEW IMAGE
    // ==========================================
    const oldCloudinaryId = faculty.cloudinaryId;

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "alliance_faculty",
      },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary Upload Error:", error);

          return res.status(500).json({
            message: "Image upload failed",
          });
        }

        try {
          faculty.name = name;
          faculty.role = role;
          faculty.department = department;
          faculty.description = description;
          faculty.experience = experience;
          faculty.specialization = specialization;
          faculty.accent = accent;

          faculty.imageUrl = result.secure_url;
          faculty.cloudinaryId = result.public_id;

          await faculty.save();

          // Delete old image only after successful DB update
          if (oldCloudinaryId) {
            try {
              await cloudinary.uploader.destroy(oldCloudinaryId);
            } catch (deleteError) {
              console.error(
                "Error deleting old Cloudinary image:",
                deleteError
              );
            }
          }

          return res.status(200).json({
            message: "Faculty updated successfully",
            faculty,
          });
        } catch (dbError) {
          console.error("Database update failed:", dbError);

          // Remove newly uploaded image if DB update fails
          try {
            await cloudinary.uploader.destroy(result.public_id);
          } catch (deleteError) {
            console.error(
              "Failed to cleanup new Cloudinary image:",
              deleteError
            );
          }

          if (dbError.name === "ValidationError") {
            const messages = Object.values(dbError.errors).map(
              (error) => error.message
            );

            return res.status(400).json({
              message: "Validation error",
              error: messages,
            });
          }

          return res.status(500).json({
            message: "Failed to update faculty record",
          });
        }
      }
    );

    uploadStream.end(req.file.buffer);
  } catch (error) {
    console.error("Server Error updating faculty:", error);

    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// ==========================================
// DELETE FACULTY
// ==========================================
export const deleteFaculty = async (req, res) => {
  try {
    const facultyId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(facultyId)) {
      return res.status(400).json({
        message: "Invalid faculty ID",
      });
    }

    const faculty = await Faculty.findById(facultyId);

    if (!faculty) {
      return res.status(404).json({
        message: "Faculty not found",
      });
    }

    const cloudinaryId = faculty.cloudinaryId;

    await Faculty.findByIdAndDelete(facultyId);

    // Delete image from Cloudinary
    if (cloudinaryId) {
      try {
        await cloudinary.uploader.destroy(cloudinaryId);
      } catch (cloudError) {
        console.error(
          "Failed to delete Cloudinary image:",
          cloudError
        );
      }
    }

    return res.status(200).json({
      message: "Faculty deleted successfully",
    });
  } catch (error) {
    console.error("Server Error deleting faculty:", error);

    return res.status(500).json({
      message: "Server error deleting faculty",
      error: error.message,
    });
  }
};