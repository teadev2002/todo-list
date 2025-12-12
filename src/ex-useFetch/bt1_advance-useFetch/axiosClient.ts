import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://693c5aa0b762a4f15c404a15.mockapi.io/",
  timeout: 10000,
});
