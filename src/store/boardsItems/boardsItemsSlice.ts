import { createSlice } from "@reduxjs/toolkit";
import { addItem, editItem, getItemsList } from "../../controller/boardsApi";

export const boardsItemsSlice = createSlice({
    name:"boardsItems",
    initialState: {
        items: [] as any,
        loading:false
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getItemsList.fulfilled, (state, action) => {
            state.items = action.payload;  
            state.loading = true      
        })
        builder.addCase(addItem.fulfilled, (state, action) => {
            state.items.push(action.payload);       
        })
        builder.addCase(editItem.fulfilled, (state, action) => {
            state.items = action.payload;      
        })
    }
})

export default boardsItemsSlice.reducer