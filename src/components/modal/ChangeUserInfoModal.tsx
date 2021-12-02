import React from "react";
import ModalFactory from "./ModalFactory";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import { setShowChangeUserInfoModal} from "../../store/reducers/modal/action-creator";
import ChangeUserInfoForm from "../ChangeUserInfoForm";

const ChangeUserInfoModal:React.FC = () => {

    let isModalOpen = useTypedSelector(state => state.modalReducer.showChangeUserInfoModal);
    let dispatch = useDispatch();

    let closeModalHandler = () =>{
        dispatch(setShowChangeUserInfoModal(false));
    }

    return (
      <ModalFactory show={isModalOpen} title={"Update your info"} onClose={closeModalHandler}>
          <ChangeUserInfoForm/>
      </ModalFactory>
    )

}

export default ChangeUserInfoModal;