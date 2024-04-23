import { configureStore } from "@reduxjs/toolkit";
import patientId from "./slices/patientSlice";

const store = configureStore({
  reducer: {
    id: patientId,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
