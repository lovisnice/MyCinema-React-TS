import axios from "axios";
import { getTokenFromLocalStorage } from "../helpers/localStorage.helper";

// створимо перехватчик запитів


const instance = axios.create({
  // до запиту буде прикріплюватися сщщлшуі
  withCredentials: false,
  baseURL: "https://cinema-api-1.azurewebsites.net/api/"
});


// який до кожного запиту додасть token із localStorage
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);


export default instance;