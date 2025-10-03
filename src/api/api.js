import axios from "axios";

export const userApi = axios.create({
  baseURL: import.meta.env.VITE_USER_SERVICE_URL,
});

export const urlApi = axios.create({
  baseURL: import.meta.env.VITE_URL_SERVICE_URL,
});

export const redirectApi = axios.create({
  baseURL: import.meta.env.VITE_REDIRECT_SERVICE_URL,
});