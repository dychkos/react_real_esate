import {IHouse} from "./IHouse";

export interface IOrder{
    id:number,
    customer_name: string,
    customer_email: string,
    customer_phone: string,
    customer_message: string,
    house :IHouse
}