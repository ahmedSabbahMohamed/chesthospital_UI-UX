import { configureStore } from "@reduxjs/toolkit";
import patientId from "./slices/patientSlice";
import employeeId from "./slices/employeeSlice";

const store = configureStore({
  reducer: {
    id: patientId,
    employeeId
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
