import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { auth } from '../pages/base';
const AdminRoutes = () => {
    const location = useLocation();
    return auth.currentUser ? (<Outlet />) : (<Navigate to="/admin-login" state={{from: location}}  replace/>)
}

export default AdminRoutes;