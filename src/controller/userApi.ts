import { child, get, ref } from "firebase/database"
import { database } from "../firebase"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getUser:any = createAsyncThunk(
    "booksList/getUser", async () => {
        const response = await get(child(ref(database), "users/0"))    
        return response.val()
    }
)