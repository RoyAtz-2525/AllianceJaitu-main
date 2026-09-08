import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

// Public Pages
import Home from "../pages/public/Home";
import About from "../pages/public/About";
import Faculty from "../pages/public/Faculty";
import Facilities from "../pages/public/Facilities";
import Admissions from "../pages/public/Admissions";
import Gallery from "../pages/public/Gallery";
import Contact from "../pages/public/Contact";
import NotFound from "../pages/public/NotFound";

// Admin Pages
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import Applications from "../pages/admin/Applications";
import ApplicationDetails from "../pages/admin/ApplicationDetails";
import ManageEvents from "../pages/admin/ManageEvents";
import ManageGallery from "../pages/admin/ManageGallery";
import ManageFaculty from "../pages/admin/ManageFaculty";
import ContactMessages from "../pages/admin/ContactMessages";

// Admin Protection
import ProtectedRoute from "../components/admin/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC WEBSITE ================= */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/faculty" element={<Faculty />} />

        <Route path="/facilities" element={<Facilities />} />

        <Route path="/admissions" element={<Admissions />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ================= ADMIN LOGIN ================= */}

      <Route path="/admin/login" element={<Login />} />

      {/* ================= PROTECTED ADMIN ================= */}

      <Route element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/admin/applications" element={<Applications />} />

          <Route
            path="/admin/applications/:id"
            element={<ApplicationDetails />}
          />

          <Route path="/admin/contacts" element={<ContactMessages />} />

          <Route path="/admin/events" element={<ManageEvents />} />

          <Route path="/admin/gallery" element={<ManageGallery />} />

          <Route path="/admin/faculty" element={<ManageFaculty />} />
        </Route>
      </Route>

      {/* ================= 404 PAGE ================= */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
