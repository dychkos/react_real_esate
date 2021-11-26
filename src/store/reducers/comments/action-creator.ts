import {AppDispatch} from "../../index";

import {
    CommentsActionTypes,
    SetComments,
    SetCommentsError,
    SetCommentsLoading,
} from "./types";

import {IComment} from "../../../models/IComment";
import CommentService from "../../../api/CommentService";


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
            dispatch(CommentsActionCreators.setCommentsError("House loading error"));
        }finally {
            dispatch(CommentsActionCreators.setCommentsLoading(false));
        }

    },
}








