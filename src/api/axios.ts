import axios from "axios";

export const api = axios.create({
  baseURL: "https://d9b1-211-241-114-119.ngrok-free.app/api",
  headers: { "Content-Type": "application/json" },
});
