import { createSlice } from "@reduxjs/toolkit";

export const hamburgerSlice = createSlice({
    name:"hamburger",
    initialState:{
        value:false
    },
    reducers:{
        openMenu: (state) => {
            state.value = true
        },
        closeMenu: (state) => {
            state.value = false
        }
    }
})

export const {openMenu, closeMenu } = hamburgerSlice.actions
export default hamburgerSlice.reducer