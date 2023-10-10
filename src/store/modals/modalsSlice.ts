import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
    name:"modals",
    initialState:{
        addBooksModal:{
            visibility:false
        },
        filtersBooksModal:{
            visibility:false
        },
        addResourcesModal:{
            visibility:false
        },
        filtersResourcesModal:{
            visibility:false
        },
    },
    reducers:{
        setAddBooksModalVisibility: (state, action) => {
            state.addBooksModal.visibility = action.payload
        },
        setFiltersBooksModalVisibility: (state, action) => {
            state.filtersBooksModal.visibility = action.payload
        },
        setAddResourcesModalVisibility: (state, action) => {
            state.addResourcesModal.visibility = action.payload
        },
        setFiltersResourcesModalVisibility: (state, action) => {
            state.filtersBooksModal.visibility = action.payload
        },
    }
})

export const { setAddBooksModalVisibility, setFiltersBooksModalVisibility, setAddResourcesModalVisibility, setFiltersResourcesModalVisibility } = modalsSlice.actions
export default modalsSlice.reducer