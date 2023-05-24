import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:"theme",
    initialState:{
        value:false
    },
    reducers:{
        lightMode: (state) => {
            state.value = false
        },
        darkMode: (state) => {
            state.value = true
        }
    }
})

export const {lightMode, darkMode } = themeSlice.actions
export default themeSlice.reducer