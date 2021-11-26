import {HouseActions, HouseActionTypes, houseReducerState} from "./types";

const initialReducer:houseReducerState={
    house:null,
    isLoading:false,
    error:""
}

const houseReducer = (state = initialReducer,action:HouseActions) :houseReducerState =>{
    switch (action.type){
        case HouseActionTypes.SET_HOUSE:
            return {...state,house:action.payload}
        case HouseActionTypes.SET_HOUSE_LOADING:
            return {...state,isLoading:action.payload}
        case HouseActionTypes.SET_HOUSE_ERROR:
            return {...state,error:action.payload}
        default:
            return state
    }
}

export default houseReducer;