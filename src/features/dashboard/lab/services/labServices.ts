import { API } from ".";
import { LAB_ENDPOINTS } from "./labEndpoints";

const postLabResults = () => {
  return API.post(LAB_ENDPOINTS.POST_RESULTS);
};

export { postLabResults };
