import Notification from "../models/Notification.js";
import mongoose from "mongoose";

// @desc    Get all notifications
// @route   GET /api/admin/notifications
// @access  Private (Admin)
export const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({}).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Mark a notification as read
// @route   PUT /api/admin/notifications/:id/read
// @access  Private (Admin)
export const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ message: "Invalid notification ID format" });
    }

    const notification = await Notification.findById(id);

    if (!notification) {
      return res.status(404).json({ message: "Notification not found" });
    }

    notification.isRead = true;
    const updatedNotification = await notification.save();

    res.json(updatedNotification);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Mark all unread notifications as read
// @route   PUT /api/admin/notifications/read-all
// @access  Private (Admin)
export const markAllAsRead = async (req, res) => {
  try {
    const result = await Notification.updateMany(
      { isRead: false },
      { $set: { isRead: true } },
    );
    res.json({
      message: "All notifications marked as read",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Clear read notifications
// @route   DELETE /api/admin/notifications/clear
// @access  Private (Admin)
export const clearReadNotifications = async (req, res) => {
  try {
    const result = await Notification.deleteMany({ isRead: true });
    res.json({
      message: "Read notifications cleared",
      deletedCount: result.deletedCount,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
