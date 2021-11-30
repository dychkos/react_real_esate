import {AppActions, AppActionTypes, AppReducer} from "./types";

const initialState : AppReducer = {
    initialized: false
}

let appReducer = (state = initialState,action:AppActions):AppReducer => {
    switch (action.type){
        case AppActionTypes.SET_INITIALIZED:
            return {...state,initialized:action.payload}
        default:
            return state;
    }
}

export default appReducer;