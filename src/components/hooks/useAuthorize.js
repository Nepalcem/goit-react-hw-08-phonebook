import { useSelector } from "react-redux";
import { getIsLoggedIn, getUser,getIsRefreshing } from "redux/authorize/selectors";



export const useAuthorize = () => {
    return {
        isLoggedIn: useSelector(getIsLoggedIn),
        isRefreshing: useSelector(getIsRefreshing),
        user: useSelector(getUser),
    }
}
