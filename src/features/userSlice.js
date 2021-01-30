import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user += 1;
    },
    logout: (state) => {
      state.user -= 1;
    }
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = state => state.user.value;

export default userSlice.reducer;
