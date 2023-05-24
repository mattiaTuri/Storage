import { RootState } from "../store";

export function themeSelector (state: RootState) {
  return state.theme.value;
}