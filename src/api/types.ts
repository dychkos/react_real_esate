import {IUser} from "../models/IUser";
import {IFeature} from "../models/IFeature";

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

export interface AddCommentRequest {
    author_name:string,
    author_message:string,
    author_image:File,
}

export interface AddHouseRequest {
    user_id : number
    name : string
    description : string
    images : File[]
    price : string
    features : IFeature[]
    ft_price : string
    address : string
    bedrooms_count : string
    showers_count : string
    floors_count : string
    garage_count : string
    founded_year : string
}



export interface AddOrderRequest {
    house_id:number,
    customer_name:string,
    customer_email:string,
    customer_phone:string ,
    customer_message:string
}

export interface Response<T> {
    data:T,
    message:string,
    success:boolean,
}


export interface ChangeUserInfoRequest {
    name:string,
    image:File,
}

export interface LoginResponse{
    data:IUser,
    message:string,
    success:boolean,
    token:string,
    token_type?:string
}


export interface CheckAuthResponse{
    user:IUser,
    auth:boolean,
}


