import {
    FeaturesAction,
    FeaturesActionTypes,
    FeaturesReducerState
} from "./types";

let initialState : FeaturesReducerState = {
    features:[],
    isLoading:false,
    error:""
}


const featuresReducer= (state = initialState, action:FeaturesAction) : FeaturesReducerState=>{
    switch (action.type){
        case FeaturesActionTypes.SET_FEATURES:{
            return {...state,features:action.payload,error:""}
        }
        case FeaturesActionTypes.SET_FEATURES_LOADING:{
            return {...state,isLoading:action.payload}
        }
        case FeaturesActionTypes.SET_FEATURES_ERROR:{
            return {...state,error:action.payload,features:[]}
        }
        default:
            return state;
    }

}

export default featuresReducer;