import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { getUser, updateUser } from "../../controller/userApi";

export const userSlice = createSlice({
    name:"user",
    initialState: {
        currentUser: {} as User,
        loading:false
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.currentUser = action.payload   
            state.loading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.currentUser = action.payload
            state.currentUser.acronym = state.currentUser.name.charAt(0).toUpperCase() + state.currentUser.surname.charAt(0).toUpperCase()
        })
    }
})

export default userSlice.reducer