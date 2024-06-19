import { API } from ".";
import { LAB_ENDPOINTS } from "./labEndpoints";

const postLabResults = (results: any) => {
  return API.post(LAB_ENDPOINTS.POST_RESULTS, results);
};

export { postLabResults };
