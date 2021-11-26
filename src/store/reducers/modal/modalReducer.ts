import {ModalAction, ModalActionTypes, ModalReducerState} from "./types";


let initialState:ModalReducerState={
    showLoginModal:false,
    showRegisterModal:false
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