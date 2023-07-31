import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice"
import hamburgerReducer from "./hamburgerMenu/hamburgerSlice"
import modalReducer from "./modal/modalSlice"
import bookRowsReducer from "./booksRows/bookRowsSlice"
import resourceRowsReducer from "./resourcesRows/resourceRowsSlice"

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        leftMenu: hamburgerReducer,
        modal: modalReducer,
        bookRows:bookRowsReducer,
        resourceRows:resourceRowsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;