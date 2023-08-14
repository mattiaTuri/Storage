import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:"theme",
    initialState:{
        value:"light"
    },
    reducers:{
        lightMode: (state) => {
            state.value = "light"
        },
        darkMode: (state) => {
            state.value = "dark"
        }
    }
})

export const {lightMode, darkMode } = themeSlice.actions
export default themeSlice.reducer