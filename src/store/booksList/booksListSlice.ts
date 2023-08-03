import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { database } from "../../firebase";
import { child, get, ref, remove, set } from "firebase/database";
import { BooksProps } from "../../models/Books";

export const booksListSlice = createSlice({
    name:"booksList",
    initialState: {
        books: [] as BooksProps[],
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getBooksList.fulfilled, (state, action) => {
            state.books = action.payload            
        })
        builder.addCase(addBook.fulfilled, (state, action) => {
            state.books.push(action.payload)
        })
        builder.addCase(removeBook.fulfilled, (state, action) => {
            state.books = action.payload
        })
    }
})

export const getBooksList:any = createAsyncThunk(
    "booksList/getBooksList", async (table:string) => {
        let p:any = [];
        await get(child(ref(database), table)).then((snapshot: any) => {     
             snapshot.forEach((elem: any) => {
                 p.push(elem.val()) 
                });
        })
        return p
    }
)

export const addBook:any = createAsyncThunk (
    "booksList/addBook", async (bookValues:BooksProps) => {
        const { id, title, author, editor, genre, pages } = bookValues;
        set(ref(database, "books/" + id), {
            id,
            title,
            author,
            editor,
            genre,
            pages,
        });
        return bookValues
    }
)

export const removeBook:any = createAsyncThunk(
    "booksList/removeBook", async (val:any) => {
        const newList = val.booksList.filter((row: BooksProps) => row.id != val.id);
        await remove(ref(database, "books/" + val.id));
        return newList
    }
)



export default booksListSlice.reducer