import {AppDispatch, RootState} from "../../index";

import {
    CommentsActionTypes,
    SetComments,
    SetCommentsError,
    SetCommentsLoading,
} from "./types";

import {IComment} from "../../../models/IComment";
import CommentService from "../../../api/CommentService";
import {AddCommentRequest, Response} from "../../../api/types";
import {toast} from "react-toastify";
import {setShowAddCommentModal} from "../modal/action-creator";


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
    addComment :(comment:AddCommentRequest)=>async (dispatch:AppDispatch,getState:()=>RootState)=>{
        dispatch(CommentsActionCreators.setCommentsLoading(true));
        try {
            const {comments} = getState().commentsReducer;
            let result:Response<IComment> = await CommentService.addComment(comment);
            dispatch(CommentsActionCreators.setComments([...comments,result.data as IComment]));
            dispatch(setShowAddCommentModal(false));
            toast("Comment success added",{
                position:"top-center",
            });
        }catch (e) {
            console.log(e)
            dispatch(CommentsActionCreators.setCommentsError("Comments adding error"));
        }finally {
            dispatch(CommentsActionCreators.setCommentsLoading(false));
        }

    },
}








