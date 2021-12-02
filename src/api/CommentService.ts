import {API_URL} from "../config";
import {IComment} from "../models/IComment";
import {AddCommentRequest, Response} from "./types";

export default class CommentService {

    static url = API_URL+"/comments";

    static async getComments () {
        return new Promise((resolve:(value:IComment[])=>void,reject)=>{
            fetch(this.url,{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            }).then(response=>{
                if (!response.ok){
                    reject("Comments loading error")
                }else {
                    response.json().then(
                        result =>resolve(result.data)
                    )
                }
            }).catch(reject);
        });
    }
    static async addComment (comment:AddCommentRequest):Promise<Response<IComment>> {
        return new Promise((resolve,reject)=>{
            let formData = new FormData();
            formData.append("author_name",comment.author_name);
            formData.append("author_message",comment.author_message);
            formData.append("author_image",comment.author_image);
            fetch(this.url,{
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
                reject("Add comment error");
            });
        });
    }


}