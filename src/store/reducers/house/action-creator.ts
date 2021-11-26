import {IHouse} from "../../../models/IHouse";
import {HouseActionTypes, SetHouse, SetHouseError, SetHouseLoading} from "./types";
import HouseService from "../../../api/HouseService";
import {AppDispatch} from "../../index";

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

    }

}
