import {AppActionTypes, SetInitialized} from "./types";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";
import {UserActionCreators} from "../user/action-creator";
import {IUser} from "../../../models/IUser";

const AppActionCreators = {
    setInitialized:(payload:boolean) : SetInitialized => ({type:AppActionTypes.SET_INITIALIZED,payload}),
    checkAuth:()=>async (dispatch:AppDispatch)=>{
        try {
            let result = await UserService.checkAuth();
            dispatch(UserActionCreators.setUser(result.user));
            dispatch(UserActionCreators.setAuth(true));
        }catch (e){
            dispatch(UserActionCreators.setUser({} as IUser));
            dispatch(UserActionCreators.setAuth(false));
            localStorage.removeItem("token");
        }finally {
            dispatch(AppActionCreators.setInitialized(true));
        }
    }
}

export default AppActionCreators;