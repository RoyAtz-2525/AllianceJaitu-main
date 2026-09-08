import express from "express";
import {
  createGalleryItem,
  getGalleryItems,
  updateGalleryItem,
  deleteGalleryItem,
} from "../controllers/galleryController.js";
import { protect } from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

const router = express.Router();

// Public route
router.get("/gallery", getGalleryItems);

// Protected admin routes
router.post(
  "/admin/gallery",
  protect,
  upload.single("image"),
  createGalleryItem,
);

router.put(
  "/admin/gallery/:id",
  protect,
  upload.single("image"),
  updateGalleryItem,
);

router.delete("/admin/gallery/:id", protect, deleteGalleryItem);

export default router;
