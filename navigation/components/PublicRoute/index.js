import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
    const token = false;

    return !token ? <Outlet /> : <Navigate to="/" />
}

export default PublicRoute;