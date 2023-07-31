import { createSlice } from "@reduxjs/toolkit";

export const bookRowsSlice = createSlice({
    name:"bookRows",
    initialState:{
        id: "",
        title: "",
        author: "",
        editor: "",
        genre: "",
        pages: 0,
    },
    reducers:{
        updateBookValues: (state, value) => {
            state.id = value.payload.title.replaceAll(" ", "_")
            state.title = value.payload.title
            state.author = value.payload.author
            state.editor = value.payload.editor
            state.genre = value.payload.genre
            state.pages = value.payload.pages
        },
    }
})

export const { updateBookValues } = bookRowsSlice.actions
export default bookRowsSlice.reducer