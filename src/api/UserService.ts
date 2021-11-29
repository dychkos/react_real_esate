import {API_URL} from "../config";
import {IUser} from "../models/IUser";
import {LoginRequest, LoginResponse, RegisterRequest} from "./types";



export default class UserService {

    static url = API_URL+"/auth";

    static async register (user:RegisterRequest) {
        return new Promise((resolve:(value:IUser[])=>void,reject)=>{
            let formData = new FormData();
            formData.append("name",user.name);
            formData.append("email",user.email);
            formData.append("password",user.password);
            formData.append("confirm_password",user.confirm_password);
            let url = this.url + "/register";
            fetch(url,{
                method:"POST",
                headers:{
                    "Accept":"application/json"
                },
                body:formData
            }).then(response=>{
                if (!response.ok && response.status === 404){
                    reject("Registration error")
                }else {
                    response.json().then(
                        result => {
                            resolve(result);
                        }
                    )
                }
            }).catch(reject);
        });
    }

    static async login (user:LoginRequest) {
        return new Promise((resolve:(value:LoginResponse)=>void,reject)=>{
            let formData = new FormData();
            formData.append("email",user.email);
            formData.append("password",user.password);
            let url = this.url + "/login";
            fetch(url,{
                method:"POST",
                headers:{
                    "Accept":"application/json"
                },
                body:formData
            }).then(response=>{
                if(!response.ok){
                    response.json().then(data => reject(data.message));
                }else{
                    response.json().then(result => resolve(result));
                }
            }).catch(()=>{
                reject("Login error");
            });
        });
    }

    static async logout () {
        return new Promise((resolve,reject)=>{
            let url = this.url + "/logout";
            fetch(url,{
                method:"GET",
                headers:{
                    "Accept":"application/json",
                    "Authorization": "Bearer" + localStorage.getItem("token")
                },

            }).then(response=>{
                if(!response.ok){
                    response.json().then(data => reject(data.message));
                }else{
                    response.json().then(result => resolve(result));
                }
            }).catch(()=>{
                reject("Logout error");
            });
        });
    }

}


