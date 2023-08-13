import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import { getUser } from "../../controller/userApi";

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
    }
})

export default userSlice.reducer