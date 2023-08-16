import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { getUser } from "../../controller/userApi";

export const userSlice = createSlice({
    name:"user",
    initialState: {
        currentUser: {} as User,
        loading:false
    },
    reducers:{
        updateUser: (state, value) => {
            state.currentUser = value.payload
            state.currentUser.acronym = state.currentUser.name.charAt(0).toUpperCase() + state.currentUser.surname.charAt(0).toUpperCase()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.currentUser = action.payload   
            state.loading = true;
        })
    }
})

export const {updateUser } = userSlice.actions
export default userSlice.reducer