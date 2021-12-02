import React from "react";
import ModalFactory from "./ModalFactory";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {setShowAddCommentModal} from "../../store/reducers/modal/action-creator";

import AddCommentForm from "../AddCommentForm";

const AddCommentModal:React.FC = () => {

    let isModalOpen = useTypedSelector(state => state.modalReducer.showAddCommentModal);
    let dispatch = useDispatch();

    let closeModalHandler = () =>{
        dispatch(setShowAddCommentModal(false));
    }


    return (
      <ModalFactory show={isModalOpen} title={"Leave your feedback"} onClose={closeModalHandler}>
          <AddCommentForm/>
      </ModalFactory>
    )

}

export default AddCommentModal;