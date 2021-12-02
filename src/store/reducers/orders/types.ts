import {IOrder} from "../../../models/IOrder";

export interface OrdersReducerState {
    orders:IOrder[],
    isLoading:boolean,
    error:string
}

export enum OrdersActionTypes {
    SET_ORDERS = "SET_ORDERS",
    ADD_ORDER = "ADD_ORDER",
    SET_ORDERS_LOADING = "SET_ORDERS_LOADING",
    SET_ORDERS_ERROR = "SET_ORDERS_ERROR"
}

export interface SetOrders {
    type: OrdersActionTypes.SET_ORDERS;
    payload: IOrder[];
}

export interface AddOrder {
    type: OrdersActionTypes.ADD_ORDER;
    payload: IOrder[];
}

export interface SetOrdersLoading {
    type: OrdersActionTypes.SET_ORDERS_LOADING;
    payload: boolean;
}

export interface SetOrdersError {
    type: OrdersActionTypes.SET_ORDERS_ERROR;
    payload: string;
}


export type OrdersAction =
    SetOrders |
    SetOrdersLoading |
    SetOrdersError