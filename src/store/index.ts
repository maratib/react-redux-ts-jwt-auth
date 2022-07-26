import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth.slice";
import themeSlice from "./theme.slice";

export * from './theme.slice';
export * from './auth.slice';


const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        auth: authSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;