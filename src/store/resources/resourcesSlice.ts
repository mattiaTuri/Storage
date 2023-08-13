import { createSlice } from "@reduxjs/toolkit";
import { ResourcesProps } from "../../models/Resource";
import { addResource, getResourcesList, removeResource } from "../../controller/resourcesApi";

export const resourcesSlice = createSlice({
    name:"resources",
    initialState: {
        resourcesList: [] as ResourcesProps[],
        loading: false
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getResourcesList.fulfilled, (state, action) => {
            state.resourcesList = action.payload     
            state.loading = true       
        })
        builder.addCase(addResource.fulfilled, (state, action) => {
            state.resourcesList.push(action.payload)
        })
        builder.addCase(removeResource.fulfilled, (state, action) => {
            state.resourcesList = action.payload
        })
    }
})

export default resourcesSlice.reducer