import {IRole} from "./IRole";
import {IImage} from "./IImage";

export interface IUser{
    id:number,
    name:string,
    email:string,
    role:IRole,
    image:IImage
}