import {IHouse} from "../models/IHouse";
import {API_URL} from "../config";
import {IComment} from "../models/IComment";

export default class CommentService {

    static url = API_URL+"/api/comments";

    static async getComments () {
        return new Promise((resolve:(value:IComment[])=>void,reject)=>{
            fetch(this.url,{
                method:"GET",
                headers:{
                    "Accept":"application/json"
                }
            }).then(response=>{
                if (!response.ok && response.status === 404){
                    reject("Comments loading error")
                }else {
                    response.json().then(
                        result =>resolve(result.data)
                    )
                }
            }).catch(reject);
        });
    }


}