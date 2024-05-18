import axios from "axios";
const BASE_API = `http://localhost:5000`;

const API = axios.create({
    baseURL: BASE_API,
});

export { API };
