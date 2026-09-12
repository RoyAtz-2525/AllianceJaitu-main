import { useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const TIMEOUT_MS = 30 * 60 * 1000; // 30 minutes in milliseconds

const useInactivityTimeout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const timerRef = useRef(null);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      // Inactivity timeout reached
      console.warn("Session expired due to inactivity.");
      logout();
      alert("Your session has expired due to inactivity. Please log in again.");
      navigate("/admin/login", { replace: true });
    }, TIMEOUT_MS);
  }, [navigate, logout]);

  useEffect(() => {
    // Events to listen for activity
    const events = ["mousemove", "keydown", "click", "scroll", "touchstart"];

    // Initialize timer
    resetTimer();

    // Attach event listeners
    const handleUserActivity = () => {
      resetTimer();
    };

    events.forEach((event) => {
      window.addEventListener(event, handleUserActivity);
    });

    // Cleanup
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, handleUserActivity);
      });
    };
  }, [resetTimer]);
};

export default useInactivityTimeout;
