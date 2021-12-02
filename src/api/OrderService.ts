import {API_URL} from "../config";
import {
    AddOrderRequest, Response,
} from "./types";
import {IOrder} from "../models/IOrder";

export default class OrderService {

    static url = API_URL+"/orders";

    static async getOrders () {
        return new Promise((resolve:(value:IOrder[])=>void,reject)=>{
            fetch(this.url,{
                method:"GET",
                headers:{
                    "Accept":"application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }).then(response=>{
                if (!response.ok){
                    reject("Orders loading error")
                }else {
                    response.json().then(
                        result =>resolve(result.data)
                    )
                }
            }).catch(reject);
        });
    }
    static async addOrder (order:AddOrderRequest):Promise<Response<IOrder>> {
        return new Promise((resolve,reject)=>{
            let formData = new FormData();
            formData.append("house_id",String(order.house_id));
            formData.append("customer_name",order.customer_name);
            formData.append("customer_email",order.customer_email);
            formData.append("customer_phone",order.customer_phone);
            formData.append("customer_message",order.customer_message);
            fetch(this.url,{
                method:"POST",
                headers:{
                    "Accept":"application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body:formData
            }).then(response=>{
                if(!response.ok){
                    response.json().then(data => reject(data.message));
                }else{
                    response.json().then(result => resolve(result));
                }
            }).catch(()=>{
                reject("Add order error");
            });
        });
    }


}