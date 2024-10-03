import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "redux/rootSaga";
import reducers from "redux/rootReducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const reduxstore = createStore(reducers, applyMiddleware(...middleware));

// Run the saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof reduxstore.getState>;

export { reduxstore };
