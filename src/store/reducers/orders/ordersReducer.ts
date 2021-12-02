import {OrdersAction, OrdersActionTypes, OrdersReducerState} from "./types";

let initialState : OrdersReducerState = {
    orders:[],
    isLoading:false,
    error:""
}


const ordersReducer= (state = initialState, action:OrdersAction) : OrdersReducerState=>{
    switch (action.type){
        case OrdersActionTypes.SET_ORDERS:{
            return {...state,orders:action.payload,error:""}
        }
        case OrdersActionTypes.SET_ORDERS_LOADING:{
            return {...state,isLoading:action.payload}
        }
        case OrdersActionTypes.SET_ORDERS_ERROR:{
            return {...state,error:action.payload,orders:[]}
        }
        default:
            return state;
    }

}

export default ordersReducer;