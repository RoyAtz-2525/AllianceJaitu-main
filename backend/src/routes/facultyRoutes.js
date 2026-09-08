import express from "express";

import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";

import {
  createFaculty,
  getFacultyItems,
  updateFaculty,
  deleteFaculty,
} from "../controllers/facultyController.js";

const router = express.Router();

// ==========================================
// PUBLIC ROUTE
// ==========================================

// Get all faculty
router.get("/faculty", getFacultyItems);


// ==========================================
// ADMIN ROUTES
// ==========================================

// Add NEW faculty
router.post(
  "/admin/faculty",
  protect,
  upload.single("image"),
  createFaculty
);

// Edit EXISTING faculty
router.put(
  "/admin/faculty/:id",
  protect,
  upload.single("image"),
  updateFaculty
);

// Delete EXISTING faculty
router.delete(
  "/admin/faculty/:id",
  protect,
  deleteFaculty
);

export default router;