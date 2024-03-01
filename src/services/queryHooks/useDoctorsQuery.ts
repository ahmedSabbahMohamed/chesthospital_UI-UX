import { useQuery } from "@tanstack/react-query"
import * as doctors from "../api/doctors"

const useDoctorQuery = () => {
    return useQuery({
        queryKey: ['doctors'],
        queryFn: doctors.getAllDoctors,
    })
}

export { useDoctorQuery }
