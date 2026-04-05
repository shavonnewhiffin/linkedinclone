import { createSlice } from '@reduxjs/toolkit';

// Storing user
const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

// Selectors - allow us to pull information
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;