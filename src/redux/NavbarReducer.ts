import { createSlice } from "@reduxjs/toolkit";

export interface NavbarState {
  isNavbarOpen: boolean;
}

const initialState: NavbarState = {
  isNavbarOpen: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbarOpen: (state) => {
      state.isNavbarOpen = true;
    },
  },
});

export const { setNavbarOpen } = navbarSlice.actions;
export default navbarSlice.reducer;
