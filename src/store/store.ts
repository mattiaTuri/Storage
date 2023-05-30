import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice"
import hamburgerReducer from "./hamburgerMenu/hamburgerSlice"

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        leftMenu: hamburgerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;