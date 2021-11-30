import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes, RouteNames} from "./router";
import {useTypedSelector} from "./hooks/useTypedSelector";
import Loader from "./components/Loader";

const AppRouter = () => {

    const {isAuth,isLoading} = useTypedSelector(state => state.userReducer);

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
                    {isLoading
                        ? <Loader fullSize={true}/>
                        : privateRoutes.map(route =>
                        <Route path={route.path}
                               exact={route.exact}
                               component={route.component}
                               key={route.path}
                        />
                    )}
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