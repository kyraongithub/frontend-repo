import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  isLoading: false,
  error: null,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
      state.error = null;
    },
    apiSuccess(state) {
      toast.success('operation successfully!');
      state.isLoading = false;
    },
    apiError(state, action) {
      toast.error("This didn't work.");
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { startLoading, apiSuccess, apiError } = apiSlice.actions;
export default apiSlice.reducer;
