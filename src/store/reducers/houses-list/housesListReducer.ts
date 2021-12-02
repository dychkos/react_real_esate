import {HousesListAction, HousesListActionTypes, HousesListReducerState} from "./types";

let initialState : HousesListReducerState = {
    houses:[],
    isLoading:false,
    error:""
}


const housesListReducer= (state = initialState, action:HousesListAction) : HousesListReducerState=>{
    switch (action.type){
        case HousesListActionTypes.SET_HOUSES_LIST:{
            return {...state,houses:action.payload}
        }
        case HousesListActionTypes.SET_HOUSES_LIST_LOADING:{
            return {...state,isLoading:action.payload}
        }
        case HousesListActionTypes.SET_HOUSES_LIST_ERROR:{
            return {...state,error:action.payload,houses:[]}
        }
        case HousesListActionTypes.SORT_HOUSES_LIST:{
            let houses = [...state.houses];
            let sorted = houses.sort((a,b)=>{
                if (action.payload.reverse){
                    return (parseInt(a[action.payload.option]) - parseInt(b[action.payload.option]));
                }else {
                    return (parseInt(b[action.payload.option]) - parseInt(a[action.payload.option]));
                }
            });
            return {...state,houses:sorted}
        }
        default:
            return state;
    }

}

export default housesListReducer;