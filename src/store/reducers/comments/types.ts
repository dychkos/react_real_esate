import {IComment} from "../../../models/IComment";

export interface CommentsReducerState {
    comments:IComment[],
    isLoading:boolean,
    error:string
}

export enum CommentsActionTypes {
    SET_COMMENTS = "SET_COMMENTS",
    SET_COMMENTS_LOADING = "SET_COMMENTS_LOADING",
    SET_COMMENTS_ERROR = "SET_COMMENTS_ERROR"
}

export interface SetComments {
    type: CommentsActionTypes.SET_COMMENTS;
    payload: IComment[];
}

export interface SetCommentsLoading {
    type: CommentsActionTypes.SET_COMMENTS_LOADING;
    payload: boolean;
}

export interface SetCommentsError {
    type: CommentsActionTypes.SET_COMMENTS_ERROR;
    payload: string;
}


export type CommentsAction =
    SetComments |
    SetCommentsLoading |
    SetCommentsError