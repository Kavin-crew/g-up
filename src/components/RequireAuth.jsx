import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowed }) => {
    const { auth } = useAuth();
    const location = useLocation();
    return auth?.userDetails?.user?.role == allowed ? <Outlet /> : <Navigate to="/404" state={{ from: location }} replace />;
};

export default RequireAuth;
