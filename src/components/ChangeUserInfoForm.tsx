import React, {useState} from 'react';
import {useForm} from "../hooks/useForm";
import {ChangeUserInfoRequest} from "../api/types";
import Loader from "./Loader";
import InputItem from "./InputItem";
import UploadPhoto from "./UploadPhoto";
import Button from "./buttons/Button";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {Helper} from "../helpers/Helper";
import {UserActionCreators} from "../store/reducers/user/action-creator";

const ChangeUserInfoForm = () => {

    let {error,isLoading,user : currentUser} = useTypedSelector(state => state.userReducer);
    const [image, setImage] = useState<string[]>([]);
    const [imageError, setImageError] = useState("");
    let dispatch = useDispatch();

    React.useEffect(()=>{
        setImage([]);
    },[]);


    let onImageChange = (image:string[]) =>{
        setImage(image)
    }
    let changeUserInfoHandler = async (user: ChangeUserInfoRequest) => {
        if (!image) {
            setImageError("Please,upload your photo");
            return;
        }
        setImageError("")
        let file = await Helper.dataUrlToFile(image[0], "image");
        let newUser: ChangeUserInfoRequest = {
            name: user.name,
            image: file
        }
        dispatch(UserActionCreators.updateUser(newUser));
    }

    const { handleSubmit, handleChange, data: user, errors } = useForm<ChangeUserInfoRequest>({
        validations: {
            name: {
                custom: {
                    isValid: (value) => value.length > 3,
                    message: 'The name needs to be at least 3 characters long.',
                },
            }
        },
        initialValues:{
            name:currentUser.name
        },
        onSubmit: (e) => changeUserInfoHandler(user)
    });

    return (
        <form onSubmit={handleSubmit}>
            {isLoading
                ?
                <Loader/>
                : <div>
                    {error && <div className="validation-fail">{error}</div> }
                    <InputItem fieldName={"author_name"} error={errors.name}
                               onChange={handleChange("name")} value={user.name || ""}
                               labelText={"Your name"}/>
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

export default ChangeUserInfoForm;