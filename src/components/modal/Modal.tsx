import React, {ReactElement, ReactNode} from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import AddCommentModal from "./AddCommentModal";
import ChangeUserInfoModal from "./ChangeUserInfoModal";


export type ModalProps = {
    show: Boolean
    title: String
    onClose: React.MouseEventHandler
    children: ReactElement | ReactNode
}

const Modal:React.FC = (props)=>{
    return(
        <div>
            <LoginModal/>
            <RegisterModal/>
            <AddCommentModal/>
            <ChangeUserInfoModal/>
        </div>
    )
}

export default Modal;