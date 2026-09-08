import axios from "axios";

// Fallback to localhost if environment variable is not defined
const API_BASE_URL = "https://alliancejaitu-main.onrender.com/api";

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

// Response interceptor to elegantly handle global authentication errors (optional)
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // You can trigger a global logout here in the future if token expires
      console.warn("Unauthorized access - maybe token expired.");
    }
    return Promise.reject(error);
  },
);

export default apiClient;
