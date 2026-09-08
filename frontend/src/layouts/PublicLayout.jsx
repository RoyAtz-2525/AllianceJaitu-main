import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/layout/ScrollToTop";
import AdmissionPopup from "../components/layout/AdmissionPopup";
import StickyApplyButton from "../components/layout/StickyApplyButton";
import FloatingSocials from "../components/layout/FloatingSocials";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollToTop />

      <Navbar />

      <main className="flex-1 relative">
        <Outlet />
        <AdmissionPopup />
      </main>

      <FloatingSocials />
      <StickyApplyButton />
      <Footer />
    </div>
  );
};

export default PublicLayout;
