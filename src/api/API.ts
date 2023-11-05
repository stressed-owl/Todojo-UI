import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3002",
  timeout: 4000,
});

export default instance;
