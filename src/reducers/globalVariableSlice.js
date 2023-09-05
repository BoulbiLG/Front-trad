import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const globalVariableSlice = createSlice({
  name: 'globalVariable',
  initialState,
  reducers: {
    setGlobalVariable: (state, action) => {
      return action.payload;
    },
  },
});

export const { setGlobalVariable } = globalVariableSlice.actions;

export default globalVariableSlice.reducer;
