import {API_URL} from "../config";
import {IFeature} from "../models/IFeature";

export default class FeatureService {

    static url = API_URL+"/features";

    static async getFeatures () {
        return new Promise((resolve:(value:IFeature[])=>void,reject)=>{
            fetch(this.url,{
                method:"GET",
                headers:{
                    "Accept":"application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            }).then(response=>{
                if (!response.ok){
                    reject("Features loading error")
                }else {
                    response.json().then(
                        result =>resolve(result.data)
                    )
                }
            }).catch(reject);
        });
    }
    // static async addFeature (comment:AddFeatureRequest):Promise<Response<IFeature>> {
    //     return new Promise((resolve,reject)=>{
    //         let formData = new FormData();
    //         formData.append("author_name",comment.author_name);
    //         formData.append("author_message",comment.author_message);
    //         formData.append("author_image",comment.author_image);
    //         fetch(this.url,{
    //             method:"POST",
    //             headers:{
    //                 "Accept":"application/json"
    //             },
    //             body:formData
    //         }).then(response=>{
    //             if(!response.ok){
    //                 response.json().then(data => reject(data.message));
    //             }else{
    //                 response.json().then(result => resolve(result));
    //             }
    //         }).catch(()=>{
    //             reject("Add comment error");
    //         });
    //     });
    // }


}