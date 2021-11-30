import React from "react";
import HouseInfo from "./HouseInfo";
import HouseOrder from "./HouseOrder";
import {IHouse} from "../models/IHouse";
import Card from "./card/Card";
import Button from "./buttons/Button";


type HouseBodyProps = {
    house:IHouse,
    canEdit: boolean
}

const HouseBody:React.FC<HouseBodyProps> = ({house,canEdit}) =>{

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
                                <Button color={"yellow"} fullWidth={true} center={true}>
                                    Edit house
                                </Button>
                            </Card>
                            :
                            <HouseOrder user={house.user} onSubmit={()=>console.log("submited order")} />
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HouseBody;