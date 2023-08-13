import { createAsyncThunk } from "@reduxjs/toolkit";
import { child, get, ref, remove, set } from "firebase/database"
import { database } from "../firebase"
import { ResourcesProps } from "../models/Resource";

export const getResourcesList:any = createAsyncThunk(
    "resourcesList/getResourcesList", async () => {
        let p:any = [];
        await get(child(ref(database), "resources")).then((snapshot: any) => {     
             snapshot.forEach((elem: any) => {
                 p.push(elem.val()) 
                });
        })
        return p
    }
)

export const addResource:any = createAsyncThunk (
    "resourcesList/addResource", async (resourceValues:ResourcesProps) => {
        resourceValues.id = resourceValues.title.replaceAll(" ", "_")
        const { id, title, link, tag, short_description } = resourceValues;
        set(ref(database, "resources/" + id), {
            id,
            title,
            link,
            tag,
            short_description,
        });
        return resourceValues
    }
)

export const removeResource:any = createAsyncThunk(
    "resourcesList/removeResource", async (val:any) => {
        const newList = val.resources.resourcesList.filter((row: ResourcesProps) => row.id != val.id);
        await remove(ref(database, "resources/" + val.id));
        return newList
    }
)

