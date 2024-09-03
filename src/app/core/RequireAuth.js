import {useLocation} from "react-router-dom";
import {MasterLayout} from "../component/MasterLayout";

export const RequireAuth = () => {
    const location = useLocation();
    const isAuthenticated = false;

    return (
        <MasterLayout/>
    )
}