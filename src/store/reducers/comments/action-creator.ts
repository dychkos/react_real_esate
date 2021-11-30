import {AppDispatch, RootState} from "../../index";

import {
    CommentsActionTypes,
    SetComments,
    SetCommentsError,
    SetCommentsLoading,
} from "./types";

import {IComment} from "../../../models/IComment";
import CommentService from "../../../api/CommentService";
import {AddCommentRequest} from "../../../api/types";


export const CommentsActionCreators = {
    setComments: (payload: Awaited<Promise<IComment[]>>): SetComments => ({type: CommentsActionTypes.SET_COMMENTS, payload}),
    setCommentsLoading: (payload: boolean): SetCommentsLoading => ({type: CommentsActionTypes.SET_COMMENTS_LOADING, payload}),
    setCommentsError: (payload: string): SetCommentsError => ({type: CommentsActionTypes.SET_COMMENTS_ERROR, payload}),
    fetchComments :()=>async (dispatch:AppDispatch)=>{
        dispatch(CommentsActionCreators.setCommentsLoading(true));
        try {
            let houses = await CommentService.getComments();
            dispatch(CommentsActionCreators.setComments(houses));
        }catch (e) {
            dispatch(CommentsActionCreators.setCommentsError("Comments loading error"));
        }finally {
            dispatch(CommentsActionCreators.setCommentsLoading(false));
        }
    },
    addComment :(comment:AddCommentRequest)=>async (dispatch:AppDispatch,state:RootState)=>{
        dispatch(CommentsActionCreators.setCommentsLoading(true));
        try {
            let result = await CommentService.addComment(comment);
            console.log(result)
            //dispatch(CommentsActionCreators.setComments(...state.commentsReducer.comments,result));
        }catch (e) {
            dispatch(CommentsActionCreators.setCommentsError("Comments adding error"));
        }finally {
            dispatch(CommentsActionCreators.setCommentsLoading(false));
        }

    },
}








