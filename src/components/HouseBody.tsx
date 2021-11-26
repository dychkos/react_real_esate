import React from "react";
import HouseInfo from "./HouseInfo";
import HouseOrder from "./HouseOrder";
import {IHouse} from "../models/IHouse";
import {useDispatch} from "react-redux";


type HouseBodyProps = {
    house:IHouse
}

const HouseBody:React.FC<HouseBodyProps> = ({house}) =>{
    let dispatch = useDispatch();
    return(
        <section className="house">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <HouseInfo house={house}/>
                    </div>
                    <div className="col-lg-4">
                        <HouseOrder user={house.user} onSubmit={()=>console.log("submited order")} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HouseBody;