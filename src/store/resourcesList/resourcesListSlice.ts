import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { database } from "../../firebase";
import { child, get, ref, remove, set } from "firebase/database";
import { ResourcesProps } from "../../models/Resources";

export const resourcesListSlice = createSlice({
    name:"resourcesList",
    initialState: {
        resources: [] as ResourcesProps[],
        loading: false
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getResourcesList.fulfilled, (state, action) => {
            state.resources = action.payload     
            state.loading = true       
        })
        builder.addCase(addResource.fulfilled, (state, action) => {
            state.resources.push(action.payload)
        })
        builder.addCase(removeResource.fulfilled, (state, action) => {
            state.resources = action.payload
        })
    }
})

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
        const newList = val.resourcesList.resources.filter((row: ResourcesProps) => row.id != val.id);
        await remove(ref(database, "resources/" + val.id));
        return newList
    }
)



export default resourcesListSlice.reducer