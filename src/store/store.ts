import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice"
import hamburgerReducer from "./hamburgerMenu/hamburgerSlice"
import modalReducer from "./modal/modalSlice"
import booksReducer from "./books/booksSlice"
import resourcesReducer from "./resources/resourcesSlice"
import userReducer from "./user/userSlice"

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        leftMenu: hamburgerReducer,
        modal: modalReducer,
        books:booksReducer,
        resources: resourcesReducer,
        user: userReducer
        }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;