import { createSlice } from '@reduxjs/toolkit';
import { login, logout, getProfile, editUsername } from './actions';

const initialState = {
  isAuthenticated: false,
  user: { firstName: "", lastName: "", userName: "" },
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
      })

      
      .addCase(getProfile.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(editUsername.fulfilled, (state, action) => {
        state.user.userName = action.payload;
        state.error = null;
      })
      .addCase(editUsername.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = null;
        state.user = { firstName: "", lastName: "", userName: "" };
        state.error = null;
      });
  },
});

export default authSlice.reducer;
