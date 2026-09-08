import { useState } from "react";
import { AuthContext } from "./auth-context";

const getStoredAdmin = () => {
  try {
    const storedAdmin = localStorage.getItem("admin");
    return storedAdmin ? JSON.parse(storedAdmin) : null;
  } catch {
    localStorage.removeItem("admin");
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(getStoredAdmin);
  const [loading] = useState(false);

  const login = (adminData, token) => {
    localStorage.setItem("admin", JSON.stringify(adminData));
    localStorage.setItem("token", token);

    setAdmin(adminData);
  };

  const logout = () => {
    localStorage.removeItem("admin");
    localStorage.removeItem("token");

    setAdmin(null);
  };

  const value = {
    admin,
    loading,
    isAuthenticated: Boolean(admin),
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
