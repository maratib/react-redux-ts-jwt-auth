import { getItem } from "@/helper";
import { IAuth } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const name = "auth";
const initialState: IAuth = {
  user: JSON.parse(localStorage.getItem("user")!),
  isAuthenticated: true,
  error: null,
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    login(state, action: PayloadAction<IAuth>) {
      state.user = action.payload.user;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.error = action.payload.error;
      console.log("Login called");
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = !state.isAuthenticated;
      localStorage.removeItem("user");
      console.log("Logout called : ", state.isAuthenticated);
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectUser = (state: IAuth) => state.user.isAuthenticated;
export default authSlice;
