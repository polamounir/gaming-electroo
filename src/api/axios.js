import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "YOUR_API_BASE_URL", // Replace with your actual API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't tried to refresh token yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("refreshToken");

        if (!refreshToken) {
          throw new Error("No refresh token available");
        }

        // Call refresh token endpoint
        const response = await axios.post("YOUR_REFRESH_TOKEN_ENDPOINT", {
          refreshToken,
        });

        const {
          accessToken,
          refreshToken: newRefreshToken,
          email,
        } = response.data;

        // Update cookies with new tokens
        Cookies.set("accessToken", accessToken, { expires: 7 }); // Adjust expiry as needed
        Cookies.set("refreshToken", newRefreshToken, { expires: 30 }); // Adjust expiry as needed
        Cookies.set("email", email);

        // Update the authorization header
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh token fails, clear all cookies and redirect to login
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        Cookies.remove("email");

        // You might want to redirect to login page here
        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
