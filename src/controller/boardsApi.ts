import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "../firebase";
import { child, get, ref, remove, set, update } from "firebase/database";

export const getItemsList: any = createAsyncThunk(
  "boardsItems/getItemsList",
  async () => {
    let itemsList: any = [];
    const response = await get(child(ref(database), "boards"));
    response.forEach((elem: any) => {
      itemsList.push(elem.val());
    });
    itemsList.sort((a: any, b: any) => a.row - b.row);
    return itemsList;
  }
);

export const addItem: any = createAsyncThunk(
  "boardsItems/addItem",
  async (item: any) => {
    item.itemValues.id = item.itemValues.title.replaceAll(" ", "_");
    item.itemValues.row = item.numberOfEl;
    const { id, title, author, genre, column, row } = item.itemValues;
    set(ref(database, "boards/" + id), {
      id,
      title,
      author,
      genre,
      column,
      row,
    });
    return item.itemValues;
  }
);

export const editItemPos: any = createAsyncThunk(
  "boardsItems/editItemPos",
  async (items: any) => {
    items.forEach((item: any) => {
      const updates: any = {};
      updates["boards/" + item.id] = item;
      update(ref(database), updates);
    });
  }
);

export const updateItem: any = createAsyncThunk(
  "boardsItems/updateItem",
  async (items: any) => {
    items.forEach((item: any) => {
      const updates: any = {};
      updates["boards/" + item.id] = item;
      update(ref(database), updates);
    });
  }
);

export const removeItem: any = createAsyncThunk(
  "boardsItems/removeItem",
  async (val: any) => {
    const newList = val.boardsItems.items.filter(
      (row: any) => row.id !== val.id
    );
    await remove(ref(database, "boards/" + val.id));
    return newList;
  }
);
