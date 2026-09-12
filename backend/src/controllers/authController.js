import Admin from "../models/Admin.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth admin & get token
// @route   POST /api/auth/login
// @access  Public
export const authAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
      admin.lastActivity = new Date();
      await admin.save();

      res.json({
        admin: {
          _id: admin._id,
          email: admin.email,
        },
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Verify admin token
// @route   GET /api/auth/verify
// @access  Private (Admin Only)
export const verifyAdmin = async (req, res) => {
  // If the request passes the protect middleware, the token is valid
  res.json({ message: "Token is valid", adminId: req.admin._id });
};
