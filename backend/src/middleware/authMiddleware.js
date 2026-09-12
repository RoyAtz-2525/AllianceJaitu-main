import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      // Decode token to get admin id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.admin = await Admin.findById(decoded.id).select("-password");

      if (!req.admin) {
        return res
          .status(401)
          .json({ message: "Not authorized, admin not found" });
      }

      // Check for inactivity timeout (30 minutes)
      const inactivityThreshold = 30 * 60 * 1000;
      if (
        req.admin.lastActivity &&
        new Date() - req.admin.lastActivity > inactivityThreshold
      ) {
        return res
          .status(401)
          .json({ message: "Session expired due to inactivity" });
      }

      // Update last activity only if it's not an automated background request
      if (req.headers["x-background-request"] !== "true") {
        await Admin.updateOne({ _id: req.admin._id }, { lastActivity: new Date() });
      }

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

export { protect };
