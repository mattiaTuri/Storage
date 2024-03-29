import { configureStore } from "@reduxjs/toolkit";
import modalsReducer from "./modals/modalsSlice"
import booksReducer from "./books/booksSlice"
import resourcesReducer from "./resources/resourcesSlice"
import userReducer from "./user/userSlice"
import storageTabReducer from "./storageTab/storageTabSlice"
import errorsReducer from "./errors/errorsSlice"
import boardsItemsReducer from "./boardsItems/boardsItemsSlice"

export const store = configureStore({
    reducer:{
        modals: modalsReducer,
        books:booksReducer,
        resources: resourcesReducer,
        user: userReducer,
        storageTab: storageTabReducer,
        errors:errorsReducer,
        boardsItems:boardsItemsReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;