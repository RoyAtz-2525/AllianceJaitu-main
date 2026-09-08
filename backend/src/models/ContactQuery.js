import mongoose from "mongoose";

const contactQuerySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ContactQuery = mongoose.model("ContactQuery", contactQuerySchema);
export default ContactQuery;
