import React from "react";
import Card from "./card/Card";
import CardImage from "./card/CardImage";
import Image from "../assets/img/poperty_house1.png";
import CardTitle from "./card/CardTitle";
import CardFooter from "./card/CardFooter";
import BedIcon from "../assets/img/Bed.svg";
import ShowerIcon from "../assets/img/Shower.svg";
import SizeIcon from "../assets/img/Size.svg";
import {useHistory} from "react-router-dom";
import {IHouse} from "../models/IHouse";
import Loader from "./Loader";
import {API_URL} from "../config";


type HousesListProps ={
    houses:IHouse[],
    isLoading:boolean
}

const HousesList:React.FC<HousesListProps> = ({houses,isLoading}) =>{
    const router = useHistory();
    return(
        <div className="listings__cards cards">
            <div className="cards__body row row-cols-1 row-cols-sm-2 row-cols-md-3">
                {isLoading ? <Loader/> : houses.map(house=>{
                    return (
                        <div className="col" key={house.id} onClick={()=>router.push(`/houses/${house.id}`)}>
                            <Card>
                                <CardImage image={API_URL+"/"+house.images[0].filename}/>
                                <CardTitle>{house.name}</CardTitle>
                                <CardFooter>
                                    <div className="card__footer-item col">
                                        <img src={BedIcon} alt="Bed"/>
                                        <span className="card__footer-info">{house.bedrooms_count}</span>
                                    </div>
                                    <div className="card__footer-item col ">
                                        <img src={ShowerIcon} alt="Shower"/>
                                        <span className="card__footer-info">{house.showers_count}</span>
                                    </div>
                                    <div className="card__footer-item col">
                                        <img src={SizeIcon} alt="Size"/>
                                        <span className="card__footer-info">{house.floors_count}</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default HousesList;