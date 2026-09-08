import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import apiClient from "./api/apiClient";

const App = () => {
  // Minimal backend connection test to verify API communication
  useEffect(() => {
    apiClient
      .get("/events")
      .then((res) =>
        console.log(
          "✅ Backend Connection Successful. Events loaded:",
          res.data.length,
        ),
      )
      .catch((err) =>
        console.error("❌ Backend Connection Failed:", err.message),
      );
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
