import {IImage} from "./IImage";

export interface IComment{
    id:number,
    author_name:string,
    author_message:string,
    image:IImage
}