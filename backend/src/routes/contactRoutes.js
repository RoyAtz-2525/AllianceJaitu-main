import express from "express";
import {
  createContactQuery,
  getContactQueries,
} from "../controllers/contactController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public route to submit a contact query (mounted at /api/contact)
router.post("/", createContactQuery);

// Protected admin route to get all contact queries (we will map this carefully in server.js)
// If mapped at /api, this would be /admin/contacts
// Let's create a clear structure.
// We will export this router and mount it.

export default router;
