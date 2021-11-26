import React from "react";
import CommentsSwiper from "./CommentsSwiper";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {CommentsActionCreators} from "../store/reducers/comments/action-creator";
import Loader from "./Loader";



const Comments:React.FC = (props) =>{

    let dispatch = useDispatch();
    let comments = useTypedSelector(state=>state.commentsReducer.comments);
    let isCommentsLoading = useTypedSelector(state=>state.commentsReducer.isLoading);

    React.useEffect(()=>{
        dispatch(CommentsActionCreators.fetchComments());
    },[])

    return(
        <section className="comments">
            <div className="container">
                {
                    isCommentsLoading ?
                        <Loader/>
                        :
                        <div className="comments__swiper">
                            <CommentsSwiper comments={comments}/>
                        </div>
                }
            </div>
        </section>
    )
}

export default Comments;