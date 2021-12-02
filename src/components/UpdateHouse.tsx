import React from 'react';
import PageHeader from "../components/PageHeader";
import HouseStoreForm from "../components/HouseStoreForm";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {HouseActionCreators} from "../store/reducers/house/action-creator";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {UrlParams} from "../pages/HousePage";
import Loader from "./Loader";

const UpdateHouse = () => {

    const params = useParams<UrlParams>();
    let dispatch = useDispatch();

    React.useEffect(()=>{
        dispatch(HouseActionCreators.fetchHouse(parseInt(params.id)));
    },[params.id,dispatch]);

    let house = useTypedSelector(state=>state.houseReducer.house);

    return (
        <div>
            <PageHeader title={"Update your house"}/>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-12 order-md-1">
                        <h4 className="mb-3">House info</h4>
                        {house ?   <HouseStoreForm house={house}/> : <Loader/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateHouse;