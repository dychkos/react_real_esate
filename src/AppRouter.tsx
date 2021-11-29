import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "./router";
import Header from "./components/Header";
import Home from "./pages/Home";
import {log} from "util";
import {useAuth} from "./hooks/useAuth";

const AppRouter = () => {
    //const {isAuth} = useTypedSelector(state => state.auth);
    let isAuth  = useAuth();
    console.log("auth",isAuth)

    return (
        isAuth ?
                <Switch>
                    {publicRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               component={route.component}
                               key={route.path}
                        />
                    )}
                    {privateRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               component={route.component}
                               key={route.path}
                        />
                    )}
                    {/*<Redirect to={RouteNames.HOME}/>*/}
                </Switch>
            :
                <Switch>
                    {publicRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               component={route.component}
                               key={route.path}
                        />
                    )}
                    <Redirect to={RouteNames.HOME}/>
                </Switch>

    );
};

export default AppRouter;