import { createSlice } from "@reduxjs/toolkit";

export const resourceRowsSlice = createSlice({
    name:"resourceRows",
    initialState:{
        id: "",
        title: "",
        link: "",
        tag: "",
        short_description: "",
    },
    reducers:{
        updateResourceValues: (state, value) => {
            state.id = value.payload.title.replaceAll(" ", "_")
            state.title = value.payload.title
            state.link = value.payload.link
            state.tag = value.payload.tag
            state.short_description = value.payload.short_description
        },
    }
})

export const { updateResourceValues } = resourceRowsSlice.actions
export default resourceRowsSlice.reducer
