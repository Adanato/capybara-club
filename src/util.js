const hardCoded = import.meta.env.VITE_BASE_URL || "backup";
const devURL = "https://localhost:3000";
const baseUrl = hardCoded || devURL;

export default baseUrl;
