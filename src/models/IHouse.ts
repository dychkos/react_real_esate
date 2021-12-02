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
    price:string,
    ft_price:string,
    address:string,
    bedrooms_count:string,
    showers_count:string,
    floors_count:string,
    garage_count:string,
    founded_year:string
}
