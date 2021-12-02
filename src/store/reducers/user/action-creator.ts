import {IUser} from "../../../models/IUser";
import {SetAuth, SetUser, SetUserError, SetUserLoading, UserActionTypes} from "./types";
import {
    ChangeUserInfoRequest,
    LoginRequest,
    RegisterRequest, Response
} from "../../../api/types";
import {AppDispatch} from "../../index";
import UserService from "../../../api/UserService";
import {toast} from "react-toastify";
import {setShowAddCommentModal, setShowLoginModal, setShowRegisterModal} from "../modal/action-creator";

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
               dispatch(setShowRegisterModal(false));
               toast.success("Successful registered",{
                   position:"top-center",
               });
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
            dispatch(setShowLoginModal(false));
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
    updateUser :(user:ChangeUserInfoRequest)=>async (dispatch:AppDispatch)=>{
        dispatch(UserActionCreators.setUserLoading(true));
        try {
            let result:Response<IUser> = await UserService.updateUser(user);
            dispatch(UserActionCreators.setUser(result.data as IUser));
            dispatch(setShowAddCommentModal(false));
            toast.success("Info success updated",{
                position:"top-center",
            });
        }catch (e) {
            dispatch(UserActionCreators.setUserError("Error with updating info"));
        }finally {
            dispatch(UserActionCreators.setUserLoading(false));
        }

    },




}
