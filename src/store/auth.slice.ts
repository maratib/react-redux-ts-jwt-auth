import { getItem, getLocalUser, setTokens } from "@/helper";
import authService from "@/services/auth.services";
import { IAuth, LoginForm } from "@/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";



export const login = createAsyncThunk("auth/login",
  async (loginFrom: LoginForm) => {
    try {

    } catch (error) {

    }
  }
);


const name = "auth";
const initialState: IAuth = {
  user: getLocalUser(),
  isAuthenticated: getLocalUser() ? true : false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
    start: (state) => {
      console.log('Loading starts');

      state.loading = true
    },
    success: (state, action: PayloadAction<any>) => {
      console.log('Loading success');
      state.loading = false
      state.user = action.payload
    },
    error: (state, action: PayloadAction<any>) => {
      console.log('Loading error');

      state.loading = false
      state.error = action.payload!
    }
  },
});

export const authenticateUser = (loginForm: LoginForm) => async (dispatch: any) => {
  try {
    const authData = await authService.login(loginForm);
    setTokens(authData.data);
    dispatch(success(authData.data));
    history.push('/v1');
  } catch (err) {
    dispatch(error(err));
  }
};



export const { logout, start, success, error } = authSlice.actions;
export const selectUser = (state: IAuth) => state.user.isAuthenticated;
export default authSlice;
