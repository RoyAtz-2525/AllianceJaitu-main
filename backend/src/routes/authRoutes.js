import express from "express";
import { authAdmin, verifyAdmin } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", authAdmin);
router.get("/verify", protect, verifyAdmin);

export default router;
