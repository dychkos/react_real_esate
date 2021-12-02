import React from "react";
import Home from "../pages/Home";
import HousePage from "../pages/HousePage";
import UserProfile from "../pages/UserProfile";
import CreateHouse from "../pages/CreateHouse";
import Orders from "../pages/Orders";
import { createBrowserHistory } from 'history';
import UpdateHouse from "../components/UpdateHouse";

export interface IRoute {
    path: string;
    exact?: boolean;
    component: React.ComponentType;

}

export enum RouteNames {
    HOME = '/',
    HOUSE_ONE = '/houses/:id',
    USER_PROFILE = '/user/houses',
    ORDERS = '/orders',
    CREATE_HOUSE = '/user/houses/create',
    UPDATE_HOUSE = '/user/houses/update/:id',
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, component: Home},
    {path: RouteNames.HOUSE_ONE, component: HousePage},
    {path: RouteNames.CREATE_HOUSE, exact:true , component: CreateHouse},

]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.USER_PROFILE, exact:true , component: UserProfile},
    {path: RouteNames.ORDERS, exact:true , component: Orders},
    {path: RouteNames.UPDATE_HOUSE, exact:true , component: UpdateHouse},

]

export const browserHistory = createBrowserHistory();