import BetaRequestTypes from "./types";

export interface AccessState {
  open?: boolean;
}

const initialState: AccessState = {
  open: false,
};

const RequestBetaAccessReducer = (state: AccessState = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case BetaRequestTypes.TOGGLE_REQUEST:
      return {
        ...state,
        open: payload,
      };
    default:
      return state;
  }
};

export default RequestBetaAccessReducer;
