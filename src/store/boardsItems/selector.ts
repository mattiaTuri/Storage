import { RootState } from "../store";

export function boardsItemsSelector (state: RootState) {
  return state.boardsItems;
}