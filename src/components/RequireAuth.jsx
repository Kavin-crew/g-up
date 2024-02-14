import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = (allowed) => {
    const { auth } = useAuth();
    const location = useLocation();
    {
        console.log(auth?.userDetails?.user?.role);
    }
    return auth?.userDetails?.user?.role == 'user' ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default RequireAuth;
