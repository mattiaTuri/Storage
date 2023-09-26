import { createSlice } from "@reduxjs/toolkit";

export const errorsSlice = createSlice({
    name:"errors",
    initialState:{
        titleError:{
            label:"",
            errorVisibility:false
        },
        genreError:{
            label:"",
            errorVisibility:false
        },
        linkError:{
            label:"",
            errorVisibility:false
        },
        tagError:{
            label:"",
            errorVisibility:false
        },
    },
    reducers:{
        setTitleError: (state, action) => {
            state.titleError.label = action.payload.titleLabel
            state.titleError.errorVisibility = action.payload.titleErrorVisibility
        },
        setGenreError: (state, action) => {
            state.genreError.label = action.payload.genreLabel
            state.genreError.errorVisibility = action.payload.genreErrorVisibility
        },
        setLinkError: (state, action) => {
            state.linkError.label = action.payload.linkLabel
            state.linkError.errorVisibility = action.payload.linkErrorVisibility
        },
        setTagError: (state, action) => {
            state.tagError.label = action.payload.tagLabel
            state.tagError.errorVisibility = action.payload.tagErrorVisibility
        },
    }
})

export const { setTitleError, setGenreError, setLinkError, setTagError } = errorsSlice.actions
export default errorsSlice.reducer