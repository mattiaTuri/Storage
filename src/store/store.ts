import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal/modalSlice"
import booksReducer from "./books/booksSlice"
import resourcesReducer from "./resources/resourcesSlice"
import userReducer from "./user/userSlice"
import storageTabReducer from "./storageTab/storageTabSlice"
import errorsReducer from "./errors/errorsSlice"

export const store = configureStore({
    reducer:{
        modal: modalReducer,
        books:booksReducer,
        resources: resourcesReducer,
        user: userReducer,
        storageTab: storageTabReducer,
        errors:errorsReducer
        }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;