import {IHouse} from "../../../models/IHouse";
import {HouseActionTypes, SetHouse, SetHouseError, SetHouseLoading} from "./types";
import HouseService from "../../../api/HouseService";
import {AppDispatch} from "../../index";
import {AddHouseRequest, Response} from "../../../api/types";
import {toast} from "react-toastify";
import {RouteComponentProps} from "react-router-dom";


export const HouseActionCreators = {
    setHouse: (payload: Awaited<Promise<IHouse>>): SetHouse => ({type: HouseActionTypes.SET_HOUSE, payload}),
    setHouseLoading: (payload: boolean): SetHouseLoading => ({type: HouseActionTypes.SET_HOUSE_LOADING, payload}),
    setHouseError: (payload: string): SetHouseError => ({type: HouseActionTypes.SET_HOUSE_ERROR, payload}),
    fetchHouse :(id:number)=>async (dispatch:AppDispatch)=>{
        dispatch(HouseActionCreators.setHouseLoading(true));
        try {
            let house = await HouseService.getOneHouse(id);
            dispatch(HouseActionCreators.setHouse(house));
        }catch (e) {
            dispatch(HouseActionCreators.setHouseError("Error with loading house"));
        }finally {
            dispatch(HouseActionCreators.setHouseLoading(false));
        }
    },
    addHouse :(house:AddHouseRequest,history:RouteComponentProps["history"])=>async (dispatch:AppDispatch)=>{
        dispatch(HouseActionCreators.setHouseLoading(true));
        try {
            let result:Response<IHouse> = await HouseService.addHouse(house);
            dispatch(HouseActionCreators.setHouse(result.data));
            history.push(`/houses/${result.data.id}`);
            toast("House success added",{
                position:"top-center",
            });
        }catch (e) {
            console.log(e)
            dispatch(HouseActionCreators.setHouseError("House adding error"));
        }finally {
            dispatch(HouseActionCreators.setHouseLoading(false));
        }

    },

}
