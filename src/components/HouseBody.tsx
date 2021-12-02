import React from "react";
import HouseInfo from "./HouseInfo";
import HouseOrder from "./HouseOrder";
import {IHouse} from "../models/IHouse";
import Card from "./card/Card";
import Button from "./buttons/Button";
import {useDispatch} from "react-redux";
import {OrdersActionCreators} from "../store/reducers/orders/action-creator";
import {AddOrderRequest} from "../api/types";
import {useHistory} from "react-router-dom";


type HouseBodyProps = {
    house:IHouse,
    canEdit: boolean
}

const HouseBody:React.FC<HouseBodyProps> = ({house,canEdit}) =>{
    let dispatch = useDispatch();
    let router = useHistory();

    const sendOrder = (order:AddOrderRequest) =>{
        let house_id = house.id;
        dispatch(OrdersActionCreators.addOrder({...order,house_id}));
    }

    return(
        <section className="house">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <HouseInfo house={house}/>
                    </div>
                    <div className="col-lg-4">
                        {canEdit ?
                            <Card>
                                <Button
                                    onClick={()=>{router.push("/user/houses/update/"+house.id)}}
                                    color={"yellow"}
                                    fullWidth={true}
                                    center={true}>
                                    Edit house
                                </Button>
                            </Card>
                            :
                            <HouseOrder user={house.user} onSubmit={sendOrder} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HouseBody;