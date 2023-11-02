import { createSlice } from "@reduxjs/toolkit";
import { BooksProps } from "../../models/Book";
import {
  addBook,
  filterBooks,
  getBooksList,
  removeBook,
} from "../../controller/booksApi";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    booksList: [] as BooksProps[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooksList.fulfilled, (state, action) => {
      state.booksList = action.payload;
      state.loading = true;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.booksList.push(action.payload);
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      state.booksList = action.payload;
    });
    builder.addCase(filterBooks.fulfilled, (state, action) => {
      state.booksList = action.payload;
    });
  },
});

export default booksSlice.reducer;
