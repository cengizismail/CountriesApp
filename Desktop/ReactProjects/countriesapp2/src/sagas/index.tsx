import {  all} from "redux-saga/effects";
import fetchCountriesSaga from "./countries";

export  default function* rootSaga(){
    console.log("rootSaga")
    yield all([
        ...fetchCountriesSaga
    ])
}