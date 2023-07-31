import { RootState } from "../store";

export function resourceRowSelector (state: RootState) {
  return state.resourceRows;
}