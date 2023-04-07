require("dotenv").config();

// const backendURL = "http://localhost:5000"; // local backend

const backendURL = process.env.REACT_APP_BACKEND_URL;

console.log(backendURL);

export default backendURL;
