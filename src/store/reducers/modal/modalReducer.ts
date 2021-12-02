import {ModalAction, ModalActionTypes, ModalReducerState} from "./types";


let initialState:ModalReducerState={
    showLoginModal:false,
    showRegisterModal:false,
    showAddCommentModal:false,
    showChangeUserInfoModal:false,
}

const modalReducer = (state = initialState,action:ModalAction) =>{
    switch (action.type){
        case ModalActionTypes.HIDE_MODALS:{
            let newState = {...state};
            newState = hideAllModals(newState);
            return newState;
        }
        case ModalActionTypes.SET_SHOW_LOGIN_MODAL: {
            let newState = {...state};
            newState = hideAllModals(newState);
            return {...newState, showLoginModal: action.payload}
        }
        case ModalActionTypes.SET_SHOW_REGISTER_MODAL: {
            let newState = {...state};
            newState = hideAllModals(newState);
            return {...newState, showRegisterModal: action.payload};
        }

        case ModalActionTypes.SET_SHOW_ADD_COMMENT_MODAL: {
            let newState = {...state};
            newState = hideAllModals(newState);
            return {...newState, showAddCommentModal: action.payload};
        }

        case ModalActionTypes.SET_SHOW_CHANGE_USER_INFO_MODAL: {
            let newState = {...state};
            newState = hideAllModals(newState);
            return {...newState, showChangeUserInfoModal: action.payload};
        }

        default:
            return state;
    }
}

function hideAllModals (state:ModalReducerState) : ModalReducerState {
    Object.keys(state).forEach(function(key) {
        // @ts-ignore
        state[key] = false
    });
    return state;
}

export default modalReducer;