import axios from "axios";

const BASI_API = `http://localhost:5000`;

const API = axios.create({
    baseURL: BASI_API,
})

export { API }
