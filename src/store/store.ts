import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice"
import hamburgerReducer from "./hamburgerMenu/hamburgerSlice"
import modalReducer from "./modal/modalSlice"
import bookRowsReducer from "./bookRow/bookRowsSlice"
import resourceRowsReducer from "./resourcesRows/resourceRowsSlice"
import booksListReducer from "./booksList/booksListSlice"

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        leftMenu: hamburgerReducer,
        modal: modalReducer,
        bookRows:bookRowsReducer,
        resourceRows:resourceRowsReducer,
        booksList:booksListReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;