import {CommentsAction, CommentsActionTypes, CommentsReducerState} from "./types";

let initialState : CommentsReducerState = {
    comments:[],
    isLoading:false,
    error:""
}


const commentsReducer= (state = initialState, action:CommentsAction) : CommentsReducerState=>{
    switch (action.type){
        case CommentsActionTypes.SET_COMMENTS:{
            return {...state,comments:action.payload}
        }
        case CommentsActionTypes.SET_COMMENTS_LOADING:{
            return {...state,isLoading:action.payload}
        }
        case CommentsActionTypes.SET_COMMENTS_ERROR:{
            return {...state,error:action.payload}
        }
        default:
            return state;
    }

}

export default commentsReducer;