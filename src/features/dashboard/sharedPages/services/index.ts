import axios from "axios";

const BASE_API = `http://localhost:5000/api/requests`;

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : null;
};

const getHeaders = () => {
  const token = getToken();

  if (token) {
    return {
      Authorization: token,
      "Content-Type": "multipart/form-data",
    };
  } else {
    return {
      "Content-Type": "multipart/form-data",
    };
  }
};

const API = axios.create({
  baseURL: BASE_API,
  headers: getHeaders(),
});

export { API };
