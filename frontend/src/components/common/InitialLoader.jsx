import { useState, useEffect } from "react";
import logo from "../../assets/logo/ais_logo.png";

const InitialLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Target ~1.2s for the visual experience so it doesn't flash too quickly
    const minTime = 1200;
    const startTime = Date.now();

    const finishLoading = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
        // Wait for fade out animation before completely removing from DOM
        setTimeout(() => setIsVisible(false), 500);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => window.removeEventListener("load", finishLoading);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes loader-scale-fade {
          0%, 100% { opacity: 0.85; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1); }
        }
        .animate-logo-subtle {
          animation: loader-scale-fade 2s ease-in-out infinite;
        }
        @keyframes loader-slide {
          0% { left: -50%; width: 50%; }
          50% { left: 25%; width: 50%; }
          100% { left: 100%; width: 50%; }
        }
        .animate-loader-slide {
          animation: loader-slide 1.5s ease-in-out infinite;
        }
      `}</style>
      
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FDFBF6] transition-opacity duration-500 ease-in-out ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="mb-10 w-48 sm:w-56 md:w-64">
            <img
              src={logo}
              alt="Alliance International School"
              className="h-auto w-full object-contain animate-logo-subtle"
            />
          </div>

          {/* Loading Line */}
          <div className="relative h-[2px] w-48 overflow-hidden rounded-full bg-[#0a1930]/10 sm:w-56">
            <div className="absolute inset-y-0 rounded-full bg-[#f97316] animate-loader-slide"></div>
          </div>

        </div>
      </div>
    </>
  );
};

export default InitialLoader;
