import {AppDispatch, RootState} from "../../index";

import {
    OrdersActionTypes,
    SetOrders,
    SetOrdersError,
    SetOrdersLoading,
} from "./types";

import {IOrder} from "../../../models/IOrder";
import OrderService from "../../../api/OrderService";
import {toast} from "react-toastify";
import {AddOrderRequest, Response} from "../../../api/types";


export const OrdersActionCreators = {
    setOrders: (payload: Awaited<Promise<IOrder[]>>): SetOrders => ({type: OrdersActionTypes.SET_ORDERS, payload}),
    setOrdersLoading: (payload: boolean): SetOrdersLoading => ({type: OrdersActionTypes.SET_ORDERS_LOADING, payload}),
    setOrdersError: (payload: string): SetOrdersError => ({type: OrdersActionTypes.SET_ORDERS_ERROR, payload}),
    fetchOrders :()=>async (dispatch:AppDispatch)=>{
        dispatch(OrdersActionCreators.setOrdersLoading(true));
        try {
            let houses = await OrderService.getOrders();
            dispatch(OrdersActionCreators.setOrders(houses));
        }catch (e) {
            dispatch(OrdersActionCreators.setOrdersError("Orders was not found"));
        }finally {
            dispatch(OrdersActionCreators.setOrdersLoading(false));
        }
    },
    addOrder :(order:AddOrderRequest)=>async (dispatch:AppDispatch,getState:()=>RootState)=>{
        dispatch(OrdersActionCreators.setOrdersLoading(true));
        try {
            const {orders} = getState().ordersReducer;
            let result:Response<IOrder> = await OrderService.addOrder(order);
            dispatch(OrdersActionCreators.setOrders([...orders,result.data as IOrder]));
            toast("Order successful added",{
                position:"top-center",
            });
        }catch (e) {
            console.log(e)
            dispatch(OrdersActionCreators.setOrdersError("Orders adding error"));
        }finally {
            dispatch(OrdersActionCreators.setOrdersLoading(false));
        }

    },
}








