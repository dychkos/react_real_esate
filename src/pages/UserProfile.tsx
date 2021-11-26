import React, {useEffect} from "react";
import PageHeader from "../components/PageHeader";
import CardTitle from "../components/card/CardTitle";
import Card from "../components/card/Card";
import CardFooter from "../components/card/CardFooter";
import Button from "../components/buttons/Button";
import {useHistory} from "react-router-dom";
import CardImage from "../components/card/CardImage";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {API_URL} from "../config";
import BedIcon from "../assets/img/Bed.svg";
import ShowerIcon from "../assets/img/Shower.svg";
import SizeIcon from "../assets/img/Size.svg";
import {useDispatch} from "react-redux";
import {HousesListActionCreators} from "../store/reducers/houses-list/action-creator";
import Loader from "../components/Loader";




const UserProfile = () =>{

    let router = useHistory();
    let dispatch = useDispatch();
    let houses = useTypedSelector(state=>state.housesListReducer.houses);
    let isHousesLoading = useTypedSelector(state=>state.housesListReducer.isLoading);
    React.useEffect(()=>{
        dispatch(HousesListActionCreators.fetchHousesListForUser());
    },[])

    return(
        <div>
            <PageHeader title={"Your sales"}/>
            <section className="house">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="houses row">
                                <div className="houses__house houses__house-empty">
                                    <Card>
                                        <CardTitle>
                                            You can add new house to sale
                                        </CardTitle>
                                        <CardFooter>
                                            <Button color={"yellow"} center={true}>
                                                Sale House
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                                <div>
                                    {isHousesLoading ?
                                        <Loader/>
                                        :
                                        <div>
                                            {houses.map(
                                                house=>{
                                                    return (
                                                        <div className="houses__house col" onClick={()=>router.push(`/houses/${house.id}`)}>
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
                                                }
                                            )}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default UserProfile;