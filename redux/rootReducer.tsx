import { combineReducers } from "redux";
import BetaAccessReducer from './RequestBetaAccess/reducer';

const reducers = combineReducers({
    RequestAccess: BetaAccessReducer,
});

export default reducers;
