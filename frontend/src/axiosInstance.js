import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: localStorage.getItem("userJWT") || "",
  },
});
