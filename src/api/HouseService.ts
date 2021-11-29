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
                if (!response.ok && response.status === 404){
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

    static async getUserHouses () {
        return new Promise((resolve:(value:IHouse[])=>void,reject)=>{
            let url = API_URL + "/user/houses";
            fetch(url,{
                method:"GET",
                headers:{
                    "Accept":"application/json",
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDZhZDc1Y2I5OTY5NTEyZmNkYTljMGRkMjFiNjZjNTc4MmY1MGQ5Y2M1YzllZDgxNTVkYWIwOWM2YTVlZDY5MWQ5MTMxODAxMGEzNzhkZmIiLCJpYXQiOjE2MzgyMDUzNjEuMzYwNzEyLCJuYmYiOjE2MzgyMDUzNjEuMzYwNzIxLCJleHAiOjE2Njk3NDEzNjEuMzU1NDY0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.fMOlJA9xdENksaxPGgCkv8lXr8kVIYmxqDXQ0NPaCRM8d26-_ycljLILofLW33ubb5uNh_TjnubZn8KAwyp5zCIgKv9HwKpARy1Z0OxWd19aSCIUrv3vkdlPqI275RfzQe1f2FIOwb8uYW6Ij9rnnsYcFqX9W58IghGfuP0R8moS8HR01hHC-FeGla0RrTwu_bA9BxAuB_rmWbzySOj3fDitzXLUwWrGl8c3QuJ57odoap-wbfIGuVsUHmvPLuEzb4rH9dCBM7ksMuPTypHcUBU0iuWLkPaUYcOOpKFYjuoLW-KVjFgvJ0h30PbRGXBQgr6UmlqbO6j3BtDuooCbGHHkVrGCSw23ZcaGjqi6THCXBFOe9addnjAhVubidqs0rBW93fI6pBxYHKHI4DgQdI6WMDDydT8DQZdsDCy9YD296YLLa50ev45wWxk_biV2iSRj7-uHcaxrrIujgCl4fRMOeQQabROwRHVhon_mC1e72dciKW7D-UC04OfyZZgBDKeKYGtnyvJC6BEHRqXsDJMbMuar5Rg6-fKg0XmF2pgprXad3Zu_Zq6jmeMWmbfVFm9wpc4JzjpwZnwK7AlLGH2yjNVrV2Qf7jss9C0E98BTMtaY_orDqk-tsBc11QZlwJ7nxR5ojYqV55yUhMyDy_7FVYi6KJSg_UTX8Vnc4Lw"
                },

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


}