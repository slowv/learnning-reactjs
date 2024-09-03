import {Outlet, useLocation} from "react-router-dom";
import {MasterLayout} from "../component/MasterLayout";

export const PublicRoute = () => {
    const location = useLocation();
    const isAuthenticated = true
    return (
        <MasterLayout/>
    )
}