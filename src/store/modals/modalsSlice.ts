import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modals",
  initialState: {
    addBooksModal: {
      visibility: false,
    },
    filtersBooksModal: {
      visibility: false,
    },
    addResourcesModal: {
      visibility: false,
    },
    filtersResourcesModal: {
      visibility: false,
    },
    addItemsModal: {
      visibility: false,
    },
    editItemsModal: {
      visibility: false,
    },
  },
  reducers: {
    setAddBooksModalVisibility: (state, action) => {
      state.addBooksModal.visibility = action.payload;
    },
    setFiltersBooksModalVisibility: (state, action) => {
      state.filtersBooksModal.visibility = action.payload;
    },
    setAddResourcesModalVisibility: (state, action) => {
      state.addResourcesModal.visibility = action.payload;
    },
    setFiltersResourcesModalVisibility: (state, action) => {
      state.filtersBooksModal.visibility = action.payload;
    },
    setAddItemsModalVisibility: (state, action) => {
      state.addItemsModal.visibility = action.payload;
    },
    setEditItemsModalVisibility: (state, action) => {
      state.editItemsModal.visibility = action.payload;
    },
  },
});

export const {
  setAddBooksModalVisibility,
  setFiltersBooksModalVisibility,
  setAddResourcesModalVisibility,
  setFiltersResourcesModalVisibility,
  setAddItemsModalVisibility,
  setEditItemsModalVisibility,
} = modalsSlice.actions;
export default modalsSlice.reducer;
