import { CountriesActionTypes as ActionTypes } from "../types/ActionTypes";
import { delay } from "redux-saga/effects";

const initialState={
    countries:["almanya"],
    searchQuery:'',
}

export default  function Countries (state=initialState,action){
   
    switch (action.type) {
        case  ActionTypes.fetch_countries_result:
             const aa = {countries:action.countries}
            return aa;
            break;

            case  ActionTypes.fetch_countries:
            console.log("geldik")
            return { ...state,countries:["fransa"]}
            break;
    
        default:
            return initialState;
    }
}