import {createStore, applyMiddleware} from "redux";
import {createLogger  } from "redux-logger";
import rootSaga from "../sagas/index";
import Countries from "../reducers/countries";

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware =createSagaMiddleware();


const str =createStore(Countries,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const store=str;