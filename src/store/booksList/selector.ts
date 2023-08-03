import { RootState } from "../store";

export function booksListSelector (state: RootState) {
  return state.booksList.books;
}