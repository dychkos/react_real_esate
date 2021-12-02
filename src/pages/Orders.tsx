import React from 'react';
import EmptyImage from "../assets/img/empty_order.png";
import PageHeader from "../components/PageHeader";
import Order from "../components/Order";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loader from "../components/Loader";
import {OrdersActionCreators} from "../store/reducers/orders/action-creator";
import Card from "../components/card/Card";

const Orders:React.FC = () => {

    const dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(OrdersActionCreators.fetchOrders());
        return () => {
            dispatch(OrdersActionCreators.setOrdersError(""));
        }
    },[dispatch])

    let {isLoading,orders,error} = useTypedSelector(state=>state.ordersReducer);

    return (
        <div>
            <PageHeader title={"Orders list"}/>
            <section className="orders">
                <div className="container">
                    {isLoading
                        ? <Loader/>
                        : <>
                            {error
                                ?<div className="order order_empty card">
                                    <div className="order__image">
                                        <img src={EmptyImage} alt="Empty order"/>
                                        <h4>{error}</h4>
                                    </div>
                                </div>
                                :<Card>
                                    {orders.map(order => <Order key={order.id} order={order}/>)}
                                </Card>
                            }
                        </>
                        }
                </div>
            </section>
        </div>
    );
};

export default Orders;