import { createSelector } from "reselect";
import { RootState } from "store";

const selectRequest = (state: RootState) => state.RequestAccess;

export const getModalState = createSelector(
  [selectRequest],
  (request) => request.open
);
