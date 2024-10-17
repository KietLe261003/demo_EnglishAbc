import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  openModal: number;
}

const initialState: CounterState = {
  value: 0,
  openModal: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<number>) => {
      state.openModal = action.payload;
    },
    setCloseModal: (state) => {
      state.openModal = 0;
    },
  },
});
export const {
  setOpenModal,
  setCloseModal,
} = counterSlice.actions;

export default counterSlice.reducer;