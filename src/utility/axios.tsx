import axios from "axios";

const instance = axios.create({
    baseURL: "https://2e1a-154-160-7-129.eu.ngrok.io/api/v1/",
    headers: {
      "Content-Type": "application/json",
    },
  });
  export default instance;

  // Endpoints
  // localhost:5000/api/v1/users to create an account
  // localhost:5000/api/v1/auth for login