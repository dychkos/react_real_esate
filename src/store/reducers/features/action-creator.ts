import {AppDispatch} from "../../index";

import {
    FeaturesActionTypes,
    SetFeatures,
    SetFeaturesError,
    SetFeaturesLoading,
} from "./types";

import {IFeature} from "../../../models/IFeature";
import FeatureService from "../../../api/FeatureService";


export const FeaturesActionCreators = {
    setFeatures: (payload: Awaited<Promise<IFeature[]>>): SetFeatures => ({type: FeaturesActionTypes.SET_FEATURES, payload}),
    setFeaturesLoading: (payload: boolean): SetFeaturesLoading => ({type: FeaturesActionTypes.SET_FEATURES_LOADING, payload}),
    setFeaturesError: (payload: string): SetFeaturesError => ({type: FeaturesActionTypes.SET_FEATURES_ERROR, payload}),
    fetchFeatures :()=>async (dispatch:AppDispatch)=>{
        dispatch(FeaturesActionCreators.setFeaturesLoading(true));
        try {
            let houses = await FeatureService.getFeatures();
            dispatch(FeaturesActionCreators.setFeatures(houses));
            return true;
        }catch (e) {
            dispatch(FeaturesActionCreators.setFeaturesError("Features loading error"));
        }finally {
            dispatch(FeaturesActionCreators.setFeaturesLoading(false));
        }
    },
    // addFeature :(comment:AddFeatureRequest)=>async (dispatch:AppDispatch,getState:()=>RootState)=>{
    //     dispatch(FeaturesActionCreators.setFeaturesLoading(true));
    //     try {
    //         const {comments} = getState().commentsReducer;
    //         let result:Response<IFeature> = await FeatureService.addFeature(comment);
    //         dispatch(FeaturesActionCreators.setFeatures([...comments,result.data as IFeature]));
    //         dispatch(setShowAddFeatureModal(false));
    //         toast("Feature success added",{
    //             position:"top-center",
    //         });
    //     }catch (e) {
    //         console.log(e)
    //         dispatch(FeaturesActionCreators.setFeaturesError("Features adding error"));
    //     }finally {
    //         dispatch(FeaturesActionCreators.setFeaturesLoading(false));
    //     }
    //
    // },
}








