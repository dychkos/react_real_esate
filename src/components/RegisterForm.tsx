import React from "react";
import Button from "./buttons/Button";
import {useDispatch} from "react-redux";
import {setShowLoginModal} from "../store/reducers/modal/action-creator";
import InputItem from "./InputItem";
import {useForm} from "../hooks/useForm";
import {RegisterRequest} from "../api/types";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loader from "./Loader";
import {UserActionCreators} from "../store/reducers/user/action-creator";

const RegisterForm = () =>{

    let dispatch = useDispatch();
    let registerError = useTypedSelector(state=>state.userReducer.error);
    let isLoading = useTypedSelector(state=>state.userReducer.isLoading);

    let openLoginModalHandler = () =>{
        dispatch(setShowLoginModal(true));
    }

    const { handleSubmit, handleChange, data: user, errors } = useForm<RegisterRequest>({
        validations: {
            name:{
                custom: {
                    isValid: (value) => value.length > 3,
                    message: 'The name needs to be at least 3 characters long.',
                },
            },
            email: {
                pattern: {
                    value: '/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/',
                    message:
                        "Your email is invalid",
                },
            },
            password: {
                custom: {
                    isValid: (value) => value.length > 6,
                    message: 'The password needs to be at least 6 characters long.',
                },
            },
            confirm_password:{
                custom:
                    {
                        likeAs:"password",
                        message:"Passwords are not same"
                    }
            }
        },
        onSubmit: (e) => register(e,user)
    });

    let register = (e: React.FormEvent<HTMLFormElement>,user : RegisterRequest) => {
        dispatch(UserActionCreators.register(user));
    }

    return(
        <form className="login-form" onSubmit={handleSubmit}>
            {isLoading
                ?
                <Loader/>
                :
                <div>
                    {registerError && <div className="validation-fail">{registerError}</div> }
                    <div className="login-form__item">
                        <InputItem fieldName={"name"}  error={errors.email} labelText={"Your name"} value={user.name || ""} onChange={handleChange('name')} required={true}/>
                    </div>

                    <div className="login-form__item">
                        <InputItem fieldName={"email"}  error={errors.email} labelText={"Email"} value={user.email || ""}  onChange={handleChange('email')} required={true} type={"email"}/>
                    </div>

                    <div className="login-form__item">
                        <InputItem fieldName={"password"}  error={errors.password} labelText={"Password"} value={user.password || ""} onChange={handleChange('password')}  required={true} type={"password"}/>
                    </div>

                    <div className="login-form__item">
                        <InputItem fieldName={"confirm_password"}  error={errors.confirm_password} labelText={"Confirm password"} value={user.confirm_password || ""} onChange={handleChange('confirm_password')}  required={true} type={"password"}/>
                    </div>

                    <div className="login-form__footer">
                        <div className="login-form__item">
                            <Button color={"yellow"} type="submit">
                                Register
                            </Button>
                        </div>
                        <p>
                            Already have account ? Please <span onClick={openLoginModalHandler} className="link" >Login</span>
                        </p>
                    </div>
                </div>
            }
        </form>
    )
}

export default RegisterForm;