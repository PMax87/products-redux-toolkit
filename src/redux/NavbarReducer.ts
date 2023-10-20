import { createSlice } from "@reduxjs/toolkit";

export interface NavbarState {
  isSidebarOpen: boolean;
}

const initialState: NavbarState = {
  isSidebarOpen: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    setNavbarOpen: (state) => {
      state.isSidebarOpen = true;
    },
    setNavbarClose: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export const { setNavbarOpen, setNavbarClose } = navbarSlice.actions;
export default navbarSlice.reducer;
