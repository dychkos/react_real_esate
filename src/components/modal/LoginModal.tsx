import React from "react";
import ModalFactory from "./ModalFactory";
import LoginForm from "../LoginForm";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setShowLoginModal} from "../../store/reducers/modal/action-creator";

const LoginModal:React.FC = () => {

    let isModalOpen = useTypedSelector(state => state.modalReducer.showLoginModal);
    let dispatch = useDispatch();


    let closeModalHandler = () =>{
        dispatch(setShowLoginModal(false));
    }

    return (
      <ModalFactory show={isModalOpen} title={"Login"} onClose={closeModalHandler}>
          <LoginForm/>
      </ModalFactory>
    )

}

export default LoginModal;