import express from "express";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/eventController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Public route
router.get("/events", getEvents);

// Protected admin routes
router.post("/admin/events", protect, upload.single("image"), createEvent);
router.put("/admin/events/:id", protect, upload.single("image"), updateEvent);
router.delete("/admin/events/:id", protect, deleteEvent);

export default router;
