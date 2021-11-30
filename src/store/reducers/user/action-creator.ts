import {IUser} from "../../../models/IUser";
import {SetAuth, SetUser, SetUserError, SetUserLoading, UserActionTypes} from "./types";
import {LoginRequest, RegisterRequest} from "../../../api/types";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";

export const UserActionCreators = {
    setUser : (payload : Awaited<Promise<IUser>>):SetUser =>({type:UserActionTypes.SET_USER,payload}),
    setAuth : (payload:boolean):SetAuth =>({type:UserActionTypes.SET_AUTH,payload}),
    setUserLoading : (payload : boolean):SetUserLoading =>({type:UserActionTypes.SET_USER_LOADING,payload}),
    setUserError : (payload : string):SetUserError =>({type:UserActionTypes.SET_USER_ERROR,payload}),
    register:(user:RegisterRequest) => async (dispatch:AppDispatch)=>{
        dispatch(UserActionCreators.setUserLoading(true));
        try {
           let result = await UserService.register(user);
           if(result){
               let result = await UserService.login(user);
               localStorage.setItem("token",result.token);
               dispatch(UserActionCreators.setUser(result.data));
               dispatch(UserActionCreators.setAuth(true));
           }
        }catch (e){
            dispatch(UserActionCreators.setUserError("Registration error"));
        }finally {
            dispatch(UserActionCreators.setUserLoading(false));
        }
    },
    login:(user:LoginRequest) => async (dispatch:AppDispatch)=>{
        dispatch(UserActionCreators.setUserLoading(true));
        try {
            let result = await UserService.login(user);
            localStorage.setItem("token",result.token);
            dispatch(UserActionCreators.setUser(result.data));
            dispatch(UserActionCreators.setAuth(true));
        }catch (error){
            dispatch(UserActionCreators.setUserError(error as string));
        }finally {
            dispatch(UserActionCreators.setUserLoading(false));
        }
    },
    logout:() => async (dispatch:AppDispatch)=>{
        dispatch(UserActionCreators.setUserLoading(true));
        try {
            await UserService.logout();
            localStorage.removeItem("token");
            dispatch(UserActionCreators.setUser({} as IUser));
            dispatch(UserActionCreators.setAuth(false));
        }catch (error){
            dispatch(UserActionCreators.setUserError(error as string));
        }finally {
            dispatch(UserActionCreators.setUserLoading(false));
        }
    },




}
//
//
// let validateRegisterUser = (user:UserRegister):string =>{
//     let error = "";
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.(user.email)){
//         error = "You have entered an invalid email address!"
//     }else if(user.password.length < 6){
//         error = "You password must have at least 6 character"
//     }else if(user.password !== user.confirm_password){
//         error = "You passwords are not same"
//     }
//
//     return error;
// }
//
