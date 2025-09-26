// Simple verification script to check API configuration
import { BASE_URL } from "./src/api/apiConfig.js";

console.log("=== API Configuration Verification ===");
console.log("BASE_URL:", BASE_URL);
console.log("Environment VITE_API_BASE_URL:", process.env.VITE_API_BASE_URL);
console.log("Should be: https://mh-expenses-app-render-backend.onrender.com/api/v1");
console.log("=== End Verification ===");

// Check if the URL is correct
if (BASE_URL === "https://mh-expenses-app-render-backend.onrender.com/api/v1") {
   console.log("✅ API configuration is correct!");
} else {
   console.log("❌ API configuration needs fixing");
   console.log("Expected: https://mh-expenses-app-render-backend.onrender.com/api/v1");
   console.log("Actual:", BASE_URL);
}
