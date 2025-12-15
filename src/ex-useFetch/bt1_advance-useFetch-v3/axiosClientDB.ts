import axios from "axios";

export const axiosClientDB = axios.create({
  baseURL: "https://dragonball-api.com/api/",
  timeout: 10000,
});
