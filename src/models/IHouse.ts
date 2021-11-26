import {IUser} from "./IUser";
import {IFeature} from "./IFeature";
import {IImage} from "./IImage";

export interface IHouse{
    id:number,
    name:string
    user:IUser,
    description:string,
    features:IFeature[],
    images:IImage[],
    price:number,
    ft_price:number,
    address:string,
    bedrooms_count:number,
    showers_count:number,
    floors_count:number,
    garage_count:number,
    founded_year:number
}
