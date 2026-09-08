import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AdmissionForm from "../admissions/AdmissionForm";

const AdmissionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Open on every route change or initial load as requested
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500); // slight delay for a nice effect

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isOpen) return null;

  return (
    <>
      {/* Drawer */}
      <div
        className="fixed top-[55%] right-4 sm:right-6 -translate-y-1/2 h-auto max-h-[60vh] sm:max-h-[85vh] w-[95%] max-w-md bg-linear-to-br from-blue-100/90 via-white/95 to-orange-100/90 backdrop-blur-xl shadow-2xl shadow-blue-900/10 flex flex-col rounded-3xl overflow-hidden border border-white/60"
        style={{ zIndex: 110 }}
      >
        {/* Content */}
        <div className="flex-1 overflow-y-auto w-full custom-scrollbar pt-4">
          {/* We wrap AdmissionForm in a scaling/zooming container to fit nicely without modifying the huge component too much */}
          <div className="transform origin-top popup-form-wrapper">
            <AdmissionForm isPopup={true} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionPopup;
