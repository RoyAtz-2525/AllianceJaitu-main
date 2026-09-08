import Application from "../models/Application.js";
import Notification from "../models/Notification.js";

// @desc    Submit a new admission application
// @route   POST /api/applications
// @access  Public
export const submitApplication = async (req, res) => {
  const {
    studentName,
    className,
    dateOfBirth,
    gender,
    parentName,
    email,
    phone,
  } = req.body;

  if (
    !studentName ||
    !className ||
    !dateOfBirth ||
    !gender ||
    !parentName ||
    !email ||
    !phone
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const application = await Application.create({
      studentName,
      className,
      dateOfBirth,
      gender,
      parentName,
      email,
      phone,
    });

    try {
      await Notification.create({
        title: "New Student Application",
        message: `New admission application received from ${studentName} for ${className}.`,
        type: "Application",
        relatedId: application._id.toString(),
        isRead: false,
      });
    } catch (notifError) {
      console.error(
        "Failed to create application notification:",
        notifError.message,
      );
    }

    res.status(201).json({
      message: "Application submitted successfully",
      application,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Get all applications
// @route   GET /api/admin/applications
// @access  Private (Admin)
export const getApplications = async (req, res) => {
  try {
    // Sort by createdAt descending (newest first)
    const applications = await Application.find({}).sort({ createdAt: -1 });
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Get a single application by ID
// @route   GET /api/admin/applications/:id
// @access  Private (Admin)
export const getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (application) {
      res.json(application);
    } else {
      res.status(404).json({ message: "Application not found" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      return res
        .status(404)
        .json({ message: "Application not found (invalid ID)" });
    }
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Update application status
// @route   PUT /api/admin/applications/:id/status
// @access  Private (Admin)
export const updateApplicationStatus = async (req, res) => {
  const { status } = req.body;
  const allowedStatuses = ["Pending", "Contacted", "Approved", "Rejected"];

  if (!status || !allowedStatuses.includes(status)) {
    return res.status(400).json({ message: "A valid status is required" });
  }

  try {
    const application = await Application.findById(req.params.id);

    if (application) {
      application.status = status;
      const updatedApplication = await application.save();
      res.json({
        message: "Application status updated successfully",
        application: updatedApplication,
      });
    } else {
      res.status(404).json({ message: "Application not found" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      return res
        .status(404)
        .json({ message: "Application not found (invalid ID)" });
    }
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
