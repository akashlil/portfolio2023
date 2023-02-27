import { configureStore } from "@reduxjs/toolkit";
import colorChane from "../features/colorChange/colorChangeSlice";

export const store = configureStore({
  reducer: {
    // auth: authSlice,
    colorchanges: colorChane,
  },
});

export default store;
