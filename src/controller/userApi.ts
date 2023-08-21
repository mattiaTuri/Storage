import { child, get, ref, update } from "firebase/database"
import { database } from "../firebase"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { User } from "../models/User"

export const getUser:any = createAsyncThunk(
    "currentUser/getUser", async () => {
        const response = await get(child(ref(database), "users/0"))    
        return response.val()
    }
)

export const updateUser:any = createAsyncThunk(
    "currentUser/updateUser", async (users:User) => {
        const { name, surname, email, password, theme } = users;
        update(ref(database, "users/0/"), {
            acronym: name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase(),
            name: name,
            surname: surname,
            email: email,
            password:password,
            theme:theme
        });
        return users;
    }
)