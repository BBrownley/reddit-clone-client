require("dotenv").config();

let backendURL;

if (process.env.REACT_APP_ENV === "dev") {
  backendURL = "http://localhost:5000"; // local backend
} else {
  backendURL = process.env.REACT_APP_BACKEND_URL; // remote hosted backend
}

export default backendURL;
