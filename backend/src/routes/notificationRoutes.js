import express from "express";
import {
  getNotifications,
  markAsRead,
  markAllAsRead,
  clearReadNotifications,
} from "../controllers/notificationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes are protected by admin authentication
router.route("/admin/notifications").get(protect, getNotifications);
router.route("/admin/notifications/read-all").put(protect, markAllAsRead);
router
  .route("/admin/notifications/clear")
  .delete(protect, clearReadNotifications);
router.route("/admin/notifications/:id/read").put(protect, markAsRead);

export default router;
