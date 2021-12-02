import React, {useState} from 'react';
import {useForm} from "../hooks/useForm";
import {AddCommentRequest} from "../api/types";
import Loader from "./Loader";
import InputItem from "./InputItem";
import UploadPhoto from "./UploadPhoto";
import Button from "./buttons/Button";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {Helper} from "../helpers/Helper";
import {CommentsActionCreators} from "../store/reducers/comments/action-creator";

const AddCommentForm = () => {

    let {error,isLoading} = useTypedSelector(state => state.commentsReducer);
    const [image, setImage] = useState<string[]>([]);
    const [imageError, setImageError] = useState("");
    let dispatch = useDispatch();

    let onImageChange = (image:string[]) =>{
        setImage(image)
    }

    let addCommentHandler = async (comment: AddCommentRequest) => {
        if (!image) {
            setImageError("Please,upload your photo");
            return;
        }
        setImageError("")
        let file = await Helper.dataUrlToFile(image[0], "image");
        let newComment: AddCommentRequest = {
            author_name: comment.author_name,
            author_message: comment.author_message,
            author_image: file
        }
        dispatch(CommentsActionCreators.addComment(newComment));
    }

    const { handleSubmit, handleChange, data: feedback, errors } = useForm<AddCommentRequest>({
        validations: {
            author_name: {
                custom: {
                    isValid: (value) => value.length > 3,
                    message: 'The name needs to be at least 3 characters long.',
                },
            },
            author_message:{
                custom:{
                    isValid: (value) => value.length > 6,
                    message: 'The message needs to be at least 6 characters long.',
                }
            }
        },
        onSubmit: (e) => addCommentHandler(feedback)
    });

    return (
        <form onSubmit={handleSubmit}>
            {isLoading
                ?
                <Loader/>
                : <div>
                    {error && <div className="validation-fail">{error}</div> }
                    <InputItem fieldName={"author_name"} error={errors.author_name}
                               onChange={handleChange("author_name")} value={feedback.author_name || ""}
                               labelText={"Your name"}/>
                    <div className="mt-2">
                        <label>Your message</label>
                        <textarea required={true} onChange={handleChange("author_message")}
                                  value={feedback.author_message || ""} rows={5}
                                  placeholder="Hello, I am interested in…"/>
                        {errors.author_message && <div className="validation-fail">{errors.author_message}</div>}
                    </div>
                    <div className="mt-2">
                        <span>Upload your photo</span>
                        <UploadPhoto images={image} changeImagesHandler={onImageChange} error={imageError}/>
                    </div>
                    <div className="mt-3">
                        <Button color={'yellow'} type={"submit"}>
                            Send
                        </Button>
                    </div>
                </div>
            }
        </form>
    );
};

export default AddCommentForm;