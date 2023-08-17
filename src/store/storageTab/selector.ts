import { RootState } from "../store";

export function storageTabSelector (state: RootState) {
  return state.storageTab.value
}