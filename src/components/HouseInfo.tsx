import React from 'react';
import {IHouse} from "../models/IHouse";
import {API_IMAGE_URL} from "../config";
import CheckImage from "../assets/img/check.svg";
import BedImage from "../assets/img/Bed.svg"
import ShowerImage from "../assets/img/Shower.svg"
import SizeImage from "../assets/img/Size.svg"
import GarageImage from "../assets/img/Garage.svg"
import DateImage from "../assets/img/Date.svg"
import Card from "./card/Card";
import CardTitle from "./card/CardTitle";
import CardFooter from "./card/CardFooter";
import Paper from "./paper/Paper";
import PaperTitle from "./paper/PaperTitle";
import PaperBody from "./paper/PaperBody";
import classNames from "classnames";

type HouseInfoProps ={
    house:IHouse
}

const HouseInfo:React.FC<HouseInfoProps> = ({house}) => {

    let previewImage = API_IMAGE_URL + house.images[0].filename;

    let [chosenPhoto,setChosenPhoto] = React.useState<string>(previewImage);

    let choosePhotoHandler = (chosenPhoto:string)=>{
        setChosenPhoto(chosenPhoto);
    }

    return (
        <div className="house__info">
            <div className="house__preview">
                <div className="row">
                    <div className="house__photo house__photo_big">
                        <img id="house-preview" src={chosenPhoto} alt="HousePage"/>
                    </div>
                </div>
                <div className="row">
                    {
                        house.images.map(image=>{
                            return (
                                <div className="col" key={image.id}>
                                    <div className="house__photo house__photo_small">
                                        <img
                                            className={classNames({active:API_IMAGE_URL+image.filename === chosenPhoto})}
                                            src={API_IMAGE_URL+image.filename}
                                            onClick={()=>{ choosePhotoHandler(API_IMAGE_URL+image.filename)} }
                                            alt="HousePage"/>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="house__details">
                <Card>
                    <CardTitle>Details</CardTitle>
                    <CardFooter>
                        <div className="card__footer-item col">
                            <img src={BedImage} alt="Bed"/>
                            <span className="card__footer-info">{house.bedrooms_count}</span>
                        </div>
                        <div className="card__footer-item col">
                            <img src={ShowerImage} alt="Shower"/>
                            <span className="card__footer-info">{house.showers_count}</span>
                        </div>
                        <div className="card__footer-item col">
                            <img src={SizeImage} alt="Size"/>
                            <span className="card__footer-info">{house.floors_count}</span>
                        </div>
                        <div className="card__footer-item col">
                            <img src={GarageImage} alt="Garage"/>
                            <span className="card__footer-info">{house.garage_count}</span>
                        </div>
                        <div className="card__footer-item col">
                            <img src={DateImage} alt="Date"/>
                            <span className="card__footer-info">{house.founded_year}</span>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <div className="house__description">
                <Paper>
                    <PaperTitle>
                        Description
                    </PaperTitle>
                    <PaperBody>
                        {house.description}
                    </PaperBody>
                </Paper>
            </div>
            {
                house.features.length > 0
                &&
                <div className="house__features">
                <Paper>
                    <PaperTitle>
                        Features
                    </PaperTitle>
                    <PaperBody>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 ">
                            {
                                house.features.map(feature=>{
                                    return(
                                        <div className="feature" key={feature.id}>
                                            <div className="feature__icon">
                                                <img src={CheckImage} alt="Feature"/>
                                            </div>
                                            <span className="feature__item">{feature.title}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </PaperBody>
                </Paper>
            </div>
            }

        </div>
    );
};

export default HouseInfo;