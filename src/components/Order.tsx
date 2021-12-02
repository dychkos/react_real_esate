import React from 'react';
import {IOrder} from "../models/IOrder";
import classNames from "classnames";
import {API_IMAGE_URL} from "../config";
import ArrowDown from "../assets/img/arrow_down.svg";

type OrderProps = {
    order:IOrder
}

const Order:React.FC<OrderProps> = ({order}) => {

    let [isOpen,setIsOpen] = React.useState(false);

    return (
        <div className={classNames("order",{"order_open":isOpen})} onClick={()=>{setIsOpen(isOpen=>!isOpen)}}>
            <div className="order__body">
                <div className="row">
                    <div className="order__items row row-cols-1 row-cols-xl-5">
                        <div className="order__item order__item_mix">
                            <img src={API_IMAGE_URL + order.house.images[0].filename}
                                 alt="Order" />
                                <span>{order.customer_name}</span>
                        </div>
                        <div className="order__item"><span>{order.customer_email}</span></div>
                        <div className="order__item"><span>{order.customer_phone}</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="order__item order__item_text">
                        <p>{order.customer_message}</p>
                    </div>
                </div>
            </div>
            <div className="order__action">
                <img className="arrow-down" src={ArrowDown} alt="Arrow down"/>
            </div>
        </div>
    );
};

export default Order;