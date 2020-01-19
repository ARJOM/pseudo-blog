import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext} from "./Auth";
import {urls} from "./urlUtils";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const {currentUser} = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                !!currentUser ? (
                    <RouteComponent {...routeProps} />
                ) : (
                    <Redirect to={urls.login.path} />
                )
            }
        />
    );
};

export default PrivateRoute