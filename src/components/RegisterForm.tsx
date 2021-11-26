import React from "react";
import Button from "./buttons/Button";
import {useDispatch} from "react-redux";
import {setShowLoginModal} from "../store/reducers/modal/action-creator";
import InputItem from "./InputItem";

const RegisterForm = () =>{

    let dispatch = useDispatch();

    let openLoginModalHandler = () =>{
        dispatch(setShowLoginModal(true));
    }

    return(
        <form className="login-form">
            <div className="login-form__item">
                <InputItem fieldName={"name"} labelText={"Name"} required={true}/>
            </div>

            <div className="login-form__item">
                <InputItem fieldName={"email"} labelText={"Email"} required={true} type={"email"}/>
            </div>

            <div className="login-form__item">
                <InputItem fieldName={"password"} labelText={"Password"} required={true} type={"password"}/>
            </div>

            <div className="login-form__item">
                <InputItem fieldName={"confirm_password"} labelText={"Confirm password"} required={true} type={"password"}/>
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
        </form>
    )
}

export default RegisterForm;