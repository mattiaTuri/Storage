import { RootState } from "../store";

export function errorsSelector (state: RootState) {
  return state.errors
}