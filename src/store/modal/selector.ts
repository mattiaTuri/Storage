import { RootState } from "../store";

export function modalSelector (state: RootState) {
  return state.modal.value
}