import { createSlice } from "@reduxjs/toolkit";

export const storageTabSlice = createSlice({
    name:"storageTab",
    initialState:{
        value:"books"
    },
    reducers:{
        changeTab: (state, val) => {
            state.value = val.payload
        },
    }
})

export const { changeTab } = storageTabSlice.actions
export default storageTabSlice.reducer