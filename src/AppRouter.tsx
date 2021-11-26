import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import {publicRoutes, RouteNames} from "./router";

const AppRouter = () => {
    //const {isAuth} = useTypedSelector(state => state.auth);
    let isAuth  = false;

    return (
        isAuth ?
            <BrowserRouter>
                <Switch>
                    {/*{privateRoutes.map(route =>*/}
                    {/*    <Route path={route.path}*/}
                    {/*           exact={route.exact}*/}
                    {/*           component={route.component}*/}
                    {/*           key={route.path}*/}
                    {/*    />*/}
                    {/*)}*/}
                    {/*<Route  path="/" component={Home} />*/}
                </Switch>
            </BrowserRouter>

            :
            <BrowserRouter>
                <Switch>
                    {publicRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               component={route.component}
                               key={route.path}
                        />
                    )}
                    {/*<Navigate to={RouteNames.LOGIN}/>*/}
                </Switch>
            </BrowserRouter>

    );
};

export default AppRouter;