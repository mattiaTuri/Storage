import { RootState } from "../store";

export function booksSelector (state: RootState) {
  return state.books;
}