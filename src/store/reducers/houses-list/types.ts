import {IHouse} from "../../../models/IHouse";

export interface HousesListReducerState {
    houses:IHouse[],
    isLoading:boolean,
    error:string
}

export enum HousesListActionTypes {
    SET_HOUSES_LIST = "SET_HOUSES_LIST",
    SORT_HOUSES_LIST = "SORT_HOUSES_LIST",
    SET_HOUSES_LIST_LOADING = "SET_HOUSES_LIST_LOADING",
    SET_HOUSES_LIST_ERROR = "SET_HOUSES_LIST_ERROR"
}

export enum HouseListFilters{
    PRICE="price",
    AGE="founded_year"
}

export interface SortPayload {
    reverse:boolean,
    option:HouseListFilters
}

export interface SetHousesList {
    type: HousesListActionTypes.SET_HOUSES_LIST;
    payload: IHouse[];
}


export interface SetHousesListLoading {
    type: HousesListActionTypes.SET_HOUSES_LIST_LOADING;
    payload: boolean;
}

export interface SetHousesListError {
    type: HousesListActionTypes.SET_HOUSES_LIST_ERROR;
    payload: string;
}

export interface SortHousesList {
    type: HousesListActionTypes.SORT_HOUSES_LIST;
    payload: SortPayload;
}

export type HousesListAction =
    SetHousesList |
    SetHousesListLoading |
    SortHousesList |
    SetHousesListError