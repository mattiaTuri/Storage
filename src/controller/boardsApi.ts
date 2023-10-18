import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../firebase";
import { child, get, ref, set } from "firebase/database";

export const getItemsList:any = createAsyncThunk(
    "boardsItems/getItemsList", async () => {
        let itemsList:any = [];
        const response = await get(child(ref(database), "boards"))     
        response.forEach((elem:any) => {
            itemsList.push(elem.val())
        })
        return itemsList   
    }
)

export const addItem:any = createAsyncThunk (
    "boardsItems/addItem", async (item:any) => {
        item.id = item.title.replaceAll(" ", "_")
        const {id, title, author, genre} = item
        set(ref(database, "boards/" + id), {
            id,
            title,
            author,
            genre
        });

        return item;
    }
)