import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EmployeeIdState {
  id: string;
}

const storedEmployeeId = localStorage.getItem("employeeId") || "";

const initialState: EmployeeIdState = {
  id: storedEmployeeId,
};

const employeeIdSlice = createSlice({
  name: "employeeId",
  initialState,
  reducers: {
    setEmployeeId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
      localStorage.setItem("employeeId", action.payload);
    },
  },
});

export const { setEmployeeId } = employeeIdSlice.actions;
export default employeeIdSlice.reducer;
