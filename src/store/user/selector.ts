import { RootState } from "../store";

export function userSelector (state: RootState) {
  return state.user;
}