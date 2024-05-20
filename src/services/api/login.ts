import { API } from ".";

const login = (values: any) => {
  return API.post("/api/auth/login", values, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export { login };
