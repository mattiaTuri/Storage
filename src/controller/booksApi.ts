import { child, get, ref, remove, set } from "firebase/database"
import { database } from "../firebase"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { BooksProps } from "../models/Book";

export const getBooksList:any = createAsyncThunk(
    "booksList/getBooksList", async () => {
        let booksList:any = [];
        const response = await get(child(ref(database), "books"))     
        response.forEach((elem:any) => {
            booksList.push(elem.val())
        })

        return booksList   
    }
)

export const addBook:any = createAsyncThunk (
    "booksList/addBook", async (bookValues:BooksProps) => {
        bookValues.id = bookValues.title.replaceAll(" ", "_")
        const { id, title, author, editor, genre, pages, isRead } = bookValues;
        set(ref(database, "books/" + id), {
            id,
            title,
            author,
            editor,
            genre,
            pages,
            isRead
        });
        return bookValues
    }
)

export const removeBook:any = createAsyncThunk(
    "booksList/removeBook", async (val:any) => {
        const newList = val.books.booksList.filter((row: BooksProps) => row.id != val.id);
        await remove(ref(database, "books/" + val.id));
        return newList
    }
)
