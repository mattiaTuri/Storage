import { RootState } from "../store";

export function bookRowsSelector (state: RootState) {
  return state.bookRows;
}