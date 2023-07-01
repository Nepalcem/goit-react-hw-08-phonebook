import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const AuthorizeSlice = createSlice({
  name: 'authorize',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase( register.pending, (state, action) => { })
      .addCase( register.rejected, (state, action) => { })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
  },
});

export const AuthorizeReducer = AuthorizeSlice.reducer;
