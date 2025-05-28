import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("payload :  ", action.payload)
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
});

// Actions
export const { login, logout } = userSlice.actions;

// Reducer
export default userSlice.reducer;
