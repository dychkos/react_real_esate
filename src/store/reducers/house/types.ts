import {IHouse} from "../../../models/IHouse";

export interface houseReducerState{
    house:IHouse | null,
    isLoading:boolean,
    error:string
}

export enum HouseActionTypes{
    SET_HOUSE="SET_HOUSE",
    SET_HOUSE_LOADING="SET_HOUSE_LOADING",
    SET_HOUSE_ERROR="SET_HOUSE_ERROR"
}

export interface SetHouse{
    type:HouseActionTypes.SET_HOUSE,
    payload:IHouse
}

export interface SetHouseLoading{
    type:HouseActionTypes.SET_HOUSE_LOADING,
    payload:boolean
}

export interface SetHouseError{
    type:HouseActionTypes.SET_HOUSE_ERROR,
    payload:string
}

export type HouseActions =
    SetHouse | SetHouseLoading |SetHouseError