import { API } from "."

const getAllDoctors = () => {
    return API.get("/doctors")
}

export { getAllDoctors }
