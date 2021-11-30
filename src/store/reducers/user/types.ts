import {IUser} from "../../../models/IUser";

export interface UserReducerState {
    user : IUser,
    isAuth : boolean
    isLoading : boolean,
    error : string
}

export enum UserActionTypes{
    SET_USER = "SET_USER",
    SET_AUTH = "SET_AUTH",
    SET_USER_LOADING = "SET_USER_LOADING",
    SET_USER_ERROR = "SET_USER_ERROR"
}

export interface SetUser {
    type:UserActionTypes.SET_USER,
    payload:IUser
}

export interface SetAuth {
    type:UserActionTypes.SET_AUTH,
    payload:boolean
}

export interface SetUserLoading {
    type:UserActionTypes.SET_USER_LOADING,
    payload:boolean
}

export interface SetUserError {
    type:UserActionTypes.SET_USER_ERROR,
    payload:string
}

export type UserAction =
    SetUser |
    SetAuth |
    SetUserError |
    SetUserLoading