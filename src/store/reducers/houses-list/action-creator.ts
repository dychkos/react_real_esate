import {AppDispatch} from "../../index";
import {IHouse} from "../../../models/IHouse";
import HouseService from "../../../api/HouseService";
import {
    HousesListActionTypes,
    SetHousesList,
    SetHousesListError,
    SetHousesListLoading,
    SortHousesList,
    SortPayload
} from "./types";


export const HousesListActionCreators = {
    setHousesList: (payload: Awaited<Promise<IHouse[]>>): SetHousesList => ({type: HousesListActionTypes.SET_HOUSES_LIST, payload}),
    setHousesListLoading: (payload: boolean): SetHousesListLoading => ({type: HousesListActionTypes.SET_HOUSES_LIST_LOADING, payload}),
    sortHousesList: (payload: SortPayload): SortHousesList => ({type: HousesListActionTypes.SORT_HOUSES_LIST, payload}),
    setHousesListError: (payload: string): SetHousesListError => ({type: HousesListActionTypes.SET_HOUSES_LIST_ERROR, payload}),
    fetchHousesList :() => async (dispatch:AppDispatch)=>{
        dispatch(HousesListActionCreators.setHousesListLoading(true));
        try {
            let houses = await HouseService.getHouses();
            dispatch(HousesListActionCreators.setHousesList(houses));
        }catch (e) {
            dispatch(HousesListActionCreators.setHousesListError("House loading error"));
        }finally {
            dispatch(HousesListActionCreators.setHousesListLoading(false));
        }

    },
    fetchSimilarHousesList :(id:number)=>async (dispatch:AppDispatch)=>{
        dispatch(HousesListActionCreators.setHousesListLoading(true));
        try {
            let houses = await HouseService.getSimilarHouses(id);
            dispatch(HousesListActionCreators.setHousesList(houses));
        }catch (e) {
            dispatch(HousesListActionCreators.setHousesListError("House loading error"));
        }finally {
            dispatch(HousesListActionCreators.setHousesListLoading(false));
        }

    },
    fetchHousesListForUser :()=>async (dispatch:AppDispatch)=>{
        dispatch(HousesListActionCreators.setHousesListLoading(true));
        try {
            let houses = await HouseService.getUserHouses();
            dispatch(HousesListActionCreators.setHousesList(houses));
        }catch (e) {
            dispatch(HousesListActionCreators.setHousesListError("House loading error"));
        }finally {
            dispatch(HousesListActionCreators.setHousesListLoading(false));
        }

    }
}








