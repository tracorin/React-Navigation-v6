import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    const token = false;

    return token ? <Outlet/> : <Navigate to="/signIn" />
}

export default PrivateRoute;

