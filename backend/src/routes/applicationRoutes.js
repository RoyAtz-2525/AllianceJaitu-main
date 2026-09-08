import express from "express";
import {
  submitApplication,
  getApplications,
  getApplicationById,
  updateApplicationStatus,
} from "../controllers/applicationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route to submit an application
router.post("/applications", submitApplication);

// Protected admin routes
router.get("/admin/applications", protect, getApplications);
router.get("/admin/applications/:id", protect, getApplicationById);
router.put("/admin/applications/:id/status", protect, updateApplicationStatus);

export default router;
