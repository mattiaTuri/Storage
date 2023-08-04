import { RootState } from "../store";

export function resourceRowsSelector (state: RootState) {
  return state.resourceRows;
}