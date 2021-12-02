import {IHouse} from "../models/IHouse";
import {API_URL} from "../config";
import {AddHouseRequest, Response} from "./types";


export default class HouseService {

    static url = API_URL+"/houses";

    static async getHouses () {
        return new Promise((resolve:(value:IHouse[])=>void,reject)=>{
            fetch(this.url,{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            }).then(response=>{
                if (!response.ok && response.status === 404){
                    reject("Houses loading error")
                }else {
                    response.json().then(
                        result =>resolve(result.data)
                    )
                }
            }).catch(reject);
        });
    }

    static async getOneHouse(id:number){
        return new Promise((resolve:(value:IHouse)=>void,reject)=>{
            let url = this.url+'/'+id;
            fetch(url,{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            }).then(response=>{
                if (!response.ok){
                    reject("House loading error")
                }else {
                    response.json().then(
                        result =>resolve(result.data)
                    )
                }
            }).catch(reject);
        });
    }

    static async getSimilarHouses (id:number) {
        return new Promise((resolve:(value:IHouse[])=>void,reject)=>{
            let url = this.url+"/similar/"+id
            fetch(url,{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            }).then(response=>{
                if (!response.ok){
                    reject("Houses loading error")
                }else {
                    response.json().then(
                        result =>resolve(result.data)
                    )
                }
            }).catch(reject);
        });
    }

    static async getUserHouses () {
        return new Promise((resolve:(value:IHouse[])=>void,reject)=>{
            let url = API_URL + "/user/houses";
            fetch(url,{
                method:"GET",
                headers:{
                    "Accept":"application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },

            }).then(response=>{
                if (!response.ok){
                    reject("Houses loading error")
                }else {
                    response.json().then(
                        result =>resolve(result.data)
                    )
                }
            }).catch(reject);
        });
    }

    static async addHouse (house:AddHouseRequest):Promise<Response<IHouse>> {
        return new Promise((resolve,reject)=>{
            let formData = new FormData();
            formData.append("user_id",String(house.user_id));
            formData.append("name",house.name);
            formData.append("address",house.address);
            formData.append("description",house.description);
            formData.append("price",house.price);
            formData.append("ft_price",house.ft_price);
            formData.append("bedrooms_count",house.bedrooms_count);
            formData.append("showers_count",house.showers_count);
            formData.append("garage_count",house.garage_count);
            formData.append("floors_count",house.floors_count);
            formData.append("founded_year",house.founded_year);

            house.images.forEach(image=>{
                formData.append("image[]",image);
            })

            house.features.forEach(feature=>{
                formData.append("feature[]",String(feature.id));
            })

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
                reject("Add house error");
            });
        });
    }


}