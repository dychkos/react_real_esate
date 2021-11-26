import React from "react";
import Button from "./buttons/Button";
import {useDispatch} from "react-redux";
import {setShowRegisterModal} from "../store/reducers/modal/action-creator";
import InputItem from "./InputItem";

const LoginForm :React.FC = () => {
    let dispatch = useDispatch();


    let openRegisterModalHandler = () =>{
        dispatch(setShowRegisterModal(true));
    }

  return(
      <form action="" className="login-form">
          <div className="login-form__item">
              <InputItem fieldName={"email"} labelText={"Email"} required={true} type={"email"}/>
          </div>

          <div className="login-form__item">
              <InputItem fieldName={"password"} labelText={"Password"} required={true} type={"password"}/>
          </div>

          <div className="login-form__item">
              <input type="checkbox" name="remember_me" id="remember_me"/>
              <label htmlFor="remember_me">Remember me</label>
          </div>

          <div className="login-form__footer">
              <div className="login-form__item">
                 <Button color={"yellow"} type="submit">
                     Login
                 </Button>
              </div>
              <p>
                  If you haven`t account please <span className="link" onClick={openRegisterModalHandler}>Register</span>
              </p>
          </div>
      </form>
  )
}


export default LoginForm;