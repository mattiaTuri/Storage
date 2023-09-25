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
        }
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
    }
})

export const { setTitleError, setGenreError } = errorsSlice.actions
export default errorsSlice.reducer