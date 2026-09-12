import axios from "axios";

// Fallback to localhost if environment variable is not defined
const API_BASE_URL = "https://alliancejaitu-main.onrender.com/api";
// const API_BASE_URL = "http://localhost:5000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach JWT token to all requests
apiClient.interceptors.request.use(
  (config) => {
    // If the token exists in localStorage, append it to the Authorization header
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor to elegantly handle global authentication errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Only handle 401s for requests that originally had an Authorization header
      // This prevents redirecting normal website visitors if a public API returns 401
      if (
        error.config &&
        error.config.headers &&
        error.config.headers.Authorization
      ) {
        console.warn("Unauthorized access - admin session expired.");
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        window.location.href = "/admin/login";
      }
    }
    return Promise.reject(error);
  },
);

export default apiClient;
