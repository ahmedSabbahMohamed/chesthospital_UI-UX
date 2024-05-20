import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface emplyeeId {
  id: string;
}

const initialState: emplyeeId = {
  id: "",
};

const emplyeeIdSlice = createSlice({
  name: "id",
  initialState,
  reducers: {
    setEmplyeeId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
});

export const { setEmplyeeId } = emplyeeIdSlice.actions;
export default emplyeeIdSlice.reducer;
