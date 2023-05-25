import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name:"theme",
    initialState:{
        value:"light"
    },
    reducers:{
        lightMode: (state) => {
            state.value = "light"
            const root = window.document.documentElement
            root.classList.remove("dark")
            root.classList.add("light")
        },
        darkMode: (state) => {
            state.value = "dark"
            const root = window.document.documentElement
            root.classList.remove("light")
            root.classList.add(state.value)
        }
    }
})

export const {lightMode, darkMode } = themeSlice.actions
export default themeSlice.reducer