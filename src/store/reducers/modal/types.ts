export interface ModalReducerState {
    showLoginModal: boolean;
    showRegisterModal: boolean;
    showAddCommentModal: boolean;
}

export enum ModalActionTypes {
    SET_SHOW_LOGIN_MODAL = "SET_SHOW_LOGIN_MODAL",
    SET_SHOW_REGISTER_MODAL = "SET_SHOW_REGISTER_MODAL",
    SET_SHOW_ADD_COMMENT_MODAL = "SET_SHOW_ADD_COMMENT_MODAL",
    HIDE_MODALS = "HIDE_MODALS",
}

export interface SetShowLoginModal {
    type: ModalActionTypes.SET_SHOW_LOGIN_MODAL;
    payload: boolean;
}

export interface SetShowRegisterModal {
    type: ModalActionTypes.SET_SHOW_REGISTER_MODAL;
    payload: boolean;
}

export interface SetShowAddCommentModal {
    type: ModalActionTypes.SET_SHOW_ADD_COMMENT_MODAL;
    payload: boolean;
}

export interface HideModals {
    type: ModalActionTypes.HIDE_MODALS;
}

export type ModalAction =
    SetShowLoginModal |
    SetShowRegisterModal |
    SetShowAddCommentModal |
    HideModals
