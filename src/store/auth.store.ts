import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      toast.success('operation successfully!');
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      toast.success('operation successfully!');
    },
    loginFailed(state) {
      state.isLoggedIn = false;
      state.user = null;
      toast.error("This didn't work.");
    },
  },
});

export const { loginSuccess, loginFailed, logout } = authSlice.actions;
export default authSlice.reducer;
