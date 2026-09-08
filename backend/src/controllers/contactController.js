import ContactQuery from "../models/ContactQuery.js";
import Notification from "../models/Notification.js";

// @desc    Submit a new contact query
// @route   POST /api/contact
// @access  Public
export const createContactQuery = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required fields" });
  }

  try {
    const contact = await ContactQuery.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    try {
      await Notification.create({
        title: "New Contact Message",
        message: `New contact message received from ${name} — Subject: ${subject || "No Subject"}`,
        type: "Message",
        relatedId: contact._id.toString(),
        isRead: false,
      });
    } catch (notifError) {
      console.error(
        "Failed to create contact notification:",
        notifError.message,
      );
    }

    res
      .status(201)
      .json({ message: "Contact query submitted successfully", contact });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Get all contact queries
// @route   GET /api/admin/contacts
// @access  Private (Admin)
export const getContactQueries = async (req, res) => {
  try {
    // Sort by createdAt descending (newest first)
    const contacts = await ContactQuery.find({}).sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
