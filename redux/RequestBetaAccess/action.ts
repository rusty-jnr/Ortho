import BetaRequestTypes from "./types";

export const toggleRequestModal = (opt: Boolean) => ({
  type: BetaRequestTypes.TOGGLE_REQUEST,
  payload: opt,
});
