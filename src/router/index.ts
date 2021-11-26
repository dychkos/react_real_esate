import React from "react";
import Home from "../pages/Home";
import HousePage from "../pages/HousePage";
import UserProfile from "../pages/UserProfile";
import CreateHouse from "../pages/CreateHouse";

export interface IRoute {
    path: string;
    exact?: boolean;
    component: React.ComponentType;

}

export enum RouteNames {
    HOME = '/',
    HOUSE_ONE = '/houses/:id',
    USER_PROFILE = '/user/houses',
    CREATE_HOUSE = '/user/houses/create',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, component: Home},
    {path: RouteNames.HOUSE_ONE, component: HousePage},
    {path: RouteNames.USER_PROFILE, exact:true , component: UserProfile},
    {path: RouteNames.CREATE_HOUSE, exact:true , component: CreateHouse},
]

// export const privateRoutes: IRoute[] = [
//     {path: RouteNames.EVENT, exact: true, component: Event}
// ]