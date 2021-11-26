import {IHouse} from "../models/IHouse";
import {API_URL} from "../config";

export default class HouseService {

    static url = API_URL+"/api/houses";

    static token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjg1MjY3NGYwZjkyNGViNWQzNDE0MjU1MWQyOWQxMWJjNTUwOWUwZGQ5NTRkZDhhYTUwYjczZjkwZjA4MDU5YzM1MzIzNzQxZTZkOTE0YzEiLCJpYXQiOjE2Mzc5NDMwMTcuNjUyNDkxLCJuYmYiOjE2Mzc5NDMwMTcuNjUyNDk2LCJleHAiOjE2Njk0NzkwMTcuNjQ3NjIzLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.Ysrj2PG9idgQR0d-pWdgTi2Zc92STcv6Qy7K2uBPN5bRFJYsxRbGYUjbYdYErlV4c6RNbVANBPb7343880Du6EwV8X-KQ1wQiO0_J9klVd9uwxX8AHj6BnXp4pD8G57bzlHm-G21_QtMIqwgCWWw40y1q39pMUnd1qfYK2ka5a2PBex3Mozrb8vTrB6QdFoo8ICuDqIiKkQCKwnS5lPfJT_n7x7ldk5q_R0SUbDRbWUK1g8-znnkDsB2Kj7-rdnjH6tB_C8Otff-fm5bacjMhHDA4jEk670rWltIKIpphJ0XRbkake1MT7HAHq1qDjbQ4Wi-lgE5qh0jz8VUx72UUyY_8vqVAwjhaebEILUWtTeRlMYac0uB0O6QYGOgAHqlNMrHUuSYOjn9_z62dJEAcwUNJjcNEZ3i8VE5Jq0W0PbZNwj31QbAPS4qLu7kfG2gLPtT12bnCUgrxg1Ag3iiNh_VokQN9tyXAngX7JVqEzGs6zg7R5J6r5lk4Zes3DvayGQkF60JdOySzDYFxMQjMuvPk7rFjzdYfB-T3WDSF2aT3_P2VltA1HG4g7gqZZniJzrbl8zlP8jHsTadsmiE6gvCuEIeX9Ks2rdU2TeV6sHH55hOnzuQ7AtoVWAqy1Z_xyv5UPAfKugAmhEKNtK-f6yeVcFcWrLjyMOY-GJ7Jhk"

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
            let url = API_URL + "/api/user/houses";
            fetch(this.url,{
                method:"GET",
                headers:{
                    "Accept":"application/json",
                    "Authorization": this.token
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