import { RootState } from "../store";

export function resourcesSelector (state: RootState) {
  return state.resources
}