import {IHouse} from "../models/IHouse";
import {API_URL} from "../config";

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


}