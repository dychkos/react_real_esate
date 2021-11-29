import React from "react";
import {IHouse} from "../models/IHouse";
import {Swiper, SwiperSlide} from "swiper/react";
import Card from "./card/Card";
import CardImage from "./card/CardImage";
import CardTitle from "./card/CardTitle";
import CardFooter from "./card/CardFooter";
import BedIcon from "../assets/img/Bed.svg";
import ShowerIcon from "../assets/img/Shower.svg";
import SizeIcon from "../assets/img/Size.svg";
import {useHistory} from "react-router-dom";
import Loader from "./Loader";
import {API_IMAGE_URL} from "../config";

type SimilarProps = {
    houses:IHouse[],
    isLoading:boolean
}

const Similar:React.FC<SimilarProps> = ({houses,isLoading}) =>{

    let router = useHistory();

    return(
        <section className="similar">
            <div className="container">
                <div className="similar__title marked-title">
                    <div className="mark"></div>
                    <h2>
                        Similar listings
                    </h2>
                </div>
                    {isLoading ?
                    <Loader/>
                        :
                    <div className="similar__swiper">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={"auto"}
                                autoplay={{
                                    delay:2500,
                                    disableOnInteraction:false
                                }}
                            >
                                {houses.map((house) => {
                                    return (
                                        <SwiperSlide key={house.id}>
                                            <div className="col" onClick={()=>router.push(`/houses/${house.id}`)}>
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
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    }
            </div>
        </section>
    )
}

export default Similar;