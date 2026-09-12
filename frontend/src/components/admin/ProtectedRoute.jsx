import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Loader from "../common/Loader";
import useInactivityTimeout from "../../hooks/useInactivityTimeout";

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  // Initialize inactivity timeout (only active when this component is mounted)
  useInactivityTimeout();

  if (loading) {
    return <Loader />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export default ProtectedRoute;
