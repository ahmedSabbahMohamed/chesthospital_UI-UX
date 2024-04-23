import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface patientId {
  id: string;
}

const initialState: patientId = {
  id: "",
};

const patientIdSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    setPatientId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { setPatientId } = patientIdSlice.actions;
export default patientIdSlice.reducer;
