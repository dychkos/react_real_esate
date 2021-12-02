import {
    HideModals,
    ModalActionTypes,
    SetShowAddCommentModal,
    SetShowChangeUserInfoModal,
    SetShowLoginModal,
    SetShowRegisterModal
} from "./types";

export let setShowLoginModal = (payload:boolean) : SetShowLoginModal=>{
    return {
        type:ModalActionTypes.SET_SHOW_LOGIN_MODAL,
        payload
    }
}

export let setShowRegisterModal = (payload:boolean) : SetShowRegisterModal=>{
    return {
        type:ModalActionTypes.SET_SHOW_REGISTER_MODAL,
        payload
    }
}

export let setShowAddCommentModal = (payload:boolean) : SetShowAddCommentModal=>{
    return {
        type:ModalActionTypes.SET_SHOW_ADD_COMMENT_MODAL,
        payload
    }
}


export let setShowChangeUserInfoModal = (payload:boolean) : SetShowChangeUserInfoModal=>{
    return {
        type:ModalActionTypes.SET_SHOW_CHANGE_USER_INFO_MODAL,
        payload
    }
}


export let hideAllModal = () : HideModals=>{
    return {
        type:ModalActionTypes.HIDE_MODALS
    }
}