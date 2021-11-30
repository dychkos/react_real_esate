import React from "react";
import PageHeader from "../components/PageHeader";
import CardTitle from "../components/card/CardTitle";
import Card from "../components/card/Card";
import CardFooter from "../components/card/CardFooter";
import Button from "../components/buttons/Button";
import {useHistory} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {HousesListActionCreators} from "../store/reducers/houses-list/action-creator";
import Loader from "../components/Loader";
import HouseItem from "../components/HouseItem";
import UserSidebar from "../components/UserSidebar";

const UserProfile = () =>{

    let router = useHistory();
    let dispatch = useDispatch();
    let {houses,isLoading : isHousesLoading} = useTypedSelector(state=>state.housesListReducer);
    let {user,isLoading : isUserLaoding} = useTypedSelector(state=>state.userReducer);

    React.useEffect(()=>{
        dispatch(HousesListActionCreators.fetchHousesListForUser());
    },[dispatch])

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
                                            {houses
                                                && houses.map(
                                                    house=>{
                                                        return (
                                                            <div className="houses__house col" key={house.id} onClick={()=>router.push(`/houses/${house.id}`)}>
                                                                <HouseItem house={house}/>
                                                            </div>
                                                        )
                                                    }
                                                )
                                            }
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            {isUserLaoding ? <Loader/> :<UserSidebar user={user} />}
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default UserProfile;