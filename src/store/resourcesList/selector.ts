import { RootState } from "../store";

export function resourcesListSelector (state: RootState) {
  return state.resourcesList
}