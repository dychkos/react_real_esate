import React from "react";
import Button from "./buttons/Button";
import {useDispatch} from "react-redux";
import {setShowRegisterModal} from "../store/reducers/modal/action-creator";
import InputItem from "./InputItem";
import {UserActionCreators} from "../store/reducers/user/action-creator";
import {LoginRequest} from "../api/types";
import {useForm} from "../hooks/useForm";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loader from "./Loader";

const LoginForm :React.FC = () => {

    let dispatch = useDispatch();
    let loginError = useTypedSelector(state=>state.userReducer.error);
    let isLoading = useTypedSelector(state=>state.userReducer.isLoading);

    let openRegisterModalHandler = () =>{
        dispatch(setShowRegisterModal(true));
    }

    let login = (user : LoginRequest) => {
        dispatch(UserActionCreators.login(user));
    }

    const { handleSubmit, handleChange, data: user, errors } = useForm<LoginRequest>({
        validations: {
            email: {
                pattern: {
                    value: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
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
        },
        onSubmit: (e) => login(user)
    });

  return(
      <form onSubmit={handleSubmit} className="login-form">
          {isLoading
              ?
              <Loader/>
              :
              <div>
                  {loginError && <div className="validation-fail">{loginError}</div> }
                  <div className="login-form__item">
                      <InputItem fieldName={"email"}  error={errors.email} labelText={"Email"} value={user.email || ""}  onChange={handleChange('email')} required={true} type={"email"}/>
                  </div>

                  <div className="login-form__item">
                      <InputItem fieldName={"password"}  error={errors.password} labelText={"Password"} value={user.password || ""} onChange={handleChange('password')}  required={true} type={"password"}/>
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
              </div>
          }

      </form>
  )
}


export default LoginForm;