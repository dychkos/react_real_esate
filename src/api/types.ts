import {IUser} from "../models/IUser";

export interface RegisterRequest {
    name:string,
    email:string,
    password:string,
    confirm_password:string
}

export interface LoginRequest {
    email:string,
    password:string
}

export interface LoginResponse{
    data:IUser,
    message:string,
    success:boolean,
    token:string,
    token_type?:string
}

