import { useAuthorize } from "components/hooks/useAuthorize"
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({component: Component, redirectTo = "/"}) => {
    const {isLoggedIn} = useAuthorize();

    return isLoggedIn ? <Navigate to={redirectTo}/> : <Component/>;
}