import { RootState } from "../store";

export function hamburgerSelector (state: RootState) {
  return state.leftMenu.value;
}