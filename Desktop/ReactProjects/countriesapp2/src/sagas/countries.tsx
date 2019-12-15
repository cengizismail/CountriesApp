import {call,put,takeEvery,takeLatest } from "redux-saga/effects";
import { CountriesActionTypes as ActionTypes } from "../types/ActionTypes";
import {  fetch_countries_api} from "../api/webApi";
import {  fetchCountriesResult} from "../actions/countries";

/*
export default function* fetchCountriesSaga(){
    try {
        return "aaaaaaaaaaaaaaaaaaaaaaaaaaa";
        //call the api here
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas");
//const response =yield call(fetch_countries_api,"")

//yield put(fetchCountriesResult("",response.data))
    } catch (error) {
        
    }
}
*/
function* fetchCountrySaga(action){
console.log("action",action);
  const response=yield call(fetch_countries_api,action.searchQuery);

  console.log("ageUpAsync");

    yield put(fetchCountriesResult(false,response.data))
  //  yield put({type:"c"})
}
export default [

    takeLatest(ActionTypes.fetch_countries,fetchCountrySaga),
]

