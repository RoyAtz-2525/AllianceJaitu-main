import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../models/Admin.js";
import connectDB from "../config/db.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const email = process.env.ADMIN_EMAIL || "admin@allianceschool.com";
    const password = process.env.ADMIN_PASSWORD || "adminpassword123";

    console.log(`Checking for existing admin with email: ${email}`);

    // Find the exact admin record
    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      console.log(
        "Admin account found. Updating password to match current environment configuration...",
      );

      // Update password (this triggers the bcrypt hashing inside the Mongoose presave hook safely)
      existingAdmin.password = password;
      await existingAdmin.save();

      console.log(`Successfully reset securely hashed password for: ${email}`);
    } else {
      console.log("Admin account not found. Creating a fresh admin...");
      await Admin.create({
        email,
        password,
      });
      console.log(`Successfully created new admin!`);
      console.log(`Email: ${email}`);
    }

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    mongoose.connection.close();
    process.exit(1);
  }
};

seedAdmin();
