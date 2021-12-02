import {IFeature} from "../../../models/IFeature";

export interface FeaturesReducerState {
    features:IFeature[],
    isLoading:boolean,
    error:string
}

export enum FeaturesActionTypes {
    SET_FEATURES = "SET_FEATURES",
    ADD_FEATURE = "ADD_FEATURE",
    SET_FEATURES_LOADING = "SET_FEATURES_LOADING",
    SET_FEATURES_ERROR = "SET_FEATURES_ERROR"
}

export interface SetFeatures {
    type: FeaturesActionTypes.SET_FEATURES;
    payload: IFeature[];
}

export interface AddFeature {
    type: FeaturesActionTypes.ADD_FEATURE;
    payload: IFeature[];
}

export interface SetFeaturesLoading {
    type: FeaturesActionTypes.SET_FEATURES_LOADING;
    payload: boolean;
}

export interface SetFeaturesError {
    type: FeaturesActionTypes.SET_FEATURES_ERROR;
    payload: string;
}


export type FeaturesAction =
    SetFeatures |
    SetFeaturesLoading |
    SetFeaturesError