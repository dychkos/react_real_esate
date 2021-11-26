import React from "react";
import ModalFactory from "./ModalFactory";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setShowRegisterModal} from "../../store/reducers/modal/action-creator";
import RegisterForm from "../RegisterForm";

const RegisterModal:React.FC = () => {

    let isModalOpen = useTypedSelector(state => state.modalReducer.showRegisterModal);
    let dispatch = useDispatch();


    let closeModalHandler = () =>{
        dispatch(setShowRegisterModal(false));
    }

    return (
      <ModalFactory show={isModalOpen} title={"Register"} onClose={closeModalHandler}>
         <RegisterForm/>
      </ModalFactory>
    )

}

export default RegisterModal;