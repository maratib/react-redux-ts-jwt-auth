
import { getItemAsBoolean, setItem } from "@/helper";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const name = 'theme';
const initialState = {
    dark: getItemAsBoolean('dark'),
}

const themeSlice = createSlice({
    name, initialState,
    reducers: {
        toggleTheme(state, action: PayloadAction) {
            state.dark = !state.dark
            setItem('dark', state.dark.toString())
        }
    }
})

export const { toggleTheme } = themeSlice.actions;

export default themeSlice;