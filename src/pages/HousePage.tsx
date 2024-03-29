import React from "react";
import Similar from "../components/Similar";
import PageHeader from "../components/PageHeader";
import HouseBody from "../components/HouseBody";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {HouseActionCreators} from "../store/reducers/house/action-creator";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import {HousesListActionCreators} from "../store/reducers/houses-list/action-creator";
import Card from "../components/card/Card";
import CardTitle from "../components/card/CardTitle";

export type UrlParams = {
    id: string;
};

const HousePage:React.FC = () =>{

    const params = useParams<UrlParams>();
    let dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(HouseActionCreators.fetchHouse(parseInt(params.id)));
        dispatch(HousesListActionCreators.fetchSimilarHousesList(parseInt(params.id)));
    },[params.id,dispatch]);

    let house = useTypedSelector(state=>state.houseReducer.house);
    let user = useTypedSelector(state=>state.userReducer.user);
    let similarHouses = useTypedSelector(state=>state.housesListReducer.houses);

    let isHouseLoading = useTypedSelector(state=>state.houseReducer.isLoading);
    let isSimilarHouseLoading = useTypedSelector(state=>state.housesListReducer.isLoading);

    let canEdit = () =>{
        return house?.user.id === user.id;
    }


    return(
        <main>
            {(isHouseLoading) ?
                <Loader fullSize={true}/>
            :
                house ? (
                    <div>

                        <PageHeader title={house.name} extraTitle={house.address}>
                            <div className="page-header__title page-header__title_text-end house-price">
                                <h3>${house.price}</h3>
                                <h6 className="gray">${house.ft_price}/sq ft</h6>
                            </div>
                        </PageHeader>

                        <HouseBody house={house} canEdit={canEdit()} />

                        <Similar houses={similarHouses} isLoading={isSimilarHouseLoading}/>
                    </div>
                ) : <div>
                    <PageHeader title="404 Not found"/>
                    <div className="container">
                        <section className="py-5 my-5">
                            <Card>
                               <CardTitle>
                                   House was not found
                               </CardTitle>
                            </Card>
                        </section>
                    </div>
                </div>
            }
        </main>
    )
}

export default HousePage;