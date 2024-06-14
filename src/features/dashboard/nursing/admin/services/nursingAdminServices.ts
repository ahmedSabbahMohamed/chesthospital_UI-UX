import { API } from ".";
import { NURSING_ADMIN_ENDPOINTS } from "./nursingAdminEndpoints";

const getOxygenRequests = () => {
  return API.get(NURSING_ADMIN_ENDPOINTS.OXYGEN_REQUESTS);
};

const deleteOxygenRequest = (id: string) => {
  return API.delete(NURSING_ADMIN_ENDPOINTS.DELETE_OXYGEN_REQUEST(id));
};

export {
    getOxygenRequests,
    deleteOxygenRequest,
}
