import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js";
import { protect } from "./middleware/authMiddleware.js";
import { getContactQueries } from "./controllers/contactController.js";

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.get("/api/admin/contacts", protect, getContactQueries);
app.use("/api", applicationRoutes);
app.use("/api", eventRoutes);
app.use("/api", galleryRoutes);
app.use("/api", facultyRoutes);
app.use("/api", notificationRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Alliance School Backend is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
