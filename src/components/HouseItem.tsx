import React from 'react';
import Card from "./card/Card";
import CardImage from "./card/CardImage";
import {API_IMAGE_URL} from "../config";
import CardTitle from "./card/CardTitle";
import CardFooter from "./card/CardFooter";
import BedIcon from "../assets/img/Bed.svg";
import ShowerIcon from "../assets/img/Shower.svg";
import SizeIcon from "../assets/img/Size.svg";
import {IHouse} from "../models/IHouse";

type HouseItemProps = {
    house:IHouse
}

const HouseItem:React.FC<HouseItemProps> = ({house}) => {
    return (
        <Card>
            <CardImage image={API_IMAGE_URL+house.images[0].filename}/>
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
    );
};

export default HouseItem;