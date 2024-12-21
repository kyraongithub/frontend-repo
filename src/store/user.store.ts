import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: undefined,
  selectedUser: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setSelectedUser(state, action) {
      state.selectedUser = action.payload;
    },
  },
});

export const { setUsers, setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
