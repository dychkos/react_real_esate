import {UserAction, UserActionTypes, UserReducerState} from "./types";
import {IUser} from "../../../models/IUser";

const initialState : UserReducerState = {
    user:{} as IUser,
    isLoading:false,
    isAuth:false,
    error:""
}


const userReducer = (state=initialState,action:UserAction):UserReducerState =>{
    switch (action.type){
        case UserActionTypes.SET_AUTH:
            return {...state,isAuth: action.payload}
        case UserActionTypes.SET_USER:
            return {...state,user: action.payload}
        case UserActionTypes.SET_USER_ERROR:
            return {...state,error:action.payload}
        case UserActionTypes.SET_USER_LOADING:{
            return {...state,isLoading:action.payload}
        }
        default:
            return state;
    }

}

export default userReducer;