import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: ''
  },
  reducers: {
    login: (state) => {
      state.token = '';
    }
  }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
