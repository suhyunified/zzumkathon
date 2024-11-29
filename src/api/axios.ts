import axios from "axios";

export const api = axios.create({
  baseURL: "https://d9e4-210-223-83-193.ngrok-free.app/api",
  headers: { "Content-Type": "application/json" },
});
