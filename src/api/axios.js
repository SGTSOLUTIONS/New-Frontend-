import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",

    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },

    timeout: 30000,
});

// ======================================================
// REQUEST INTERCEPTOR
// Automatically attach Sanctum token
// ======================================================

api.interceptors.request.use(
    (config) => {
        const token = sessionStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);


// ======================================================
// RESPONSE INTERCEPTOR
// Handle authentication errors
// ======================================================

api.interceptors.response.use(
    (response) => response,

    (error) => {
        if (error.response?.status === 401) {
            // Clear expired authentication
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");

            // Redirect to login only if not already there
            if (window.location.pathname !== "/login") {
                window.location.href = "/login";
            }
        }

        return Promise.reject(error);
    }
);

export default api;
