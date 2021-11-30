export interface AppReducer {
    initialized: boolean
}


export enum AppActionTypes {
    SET_INITIALIZED ="SET_INITIALIZED"
}

export interface SetInitialized {
    type:AppActionTypes.SET_INITIALIZED,
    payload:boolean
}

export type AppActions = SetInitialized