import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    sidebar: {
      opened: false
    }
  },
  reducers: {
    toggleSideBar: (state) => {
      state.sidebar.opened = !state.sidebar.opened;
    }
  }
});

export const { toggleSideBar } = appSlice.actions;

export default appSlice.reducer;
