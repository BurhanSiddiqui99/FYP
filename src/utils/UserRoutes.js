import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { auth } from '../pages/base';
const UserRoutes = () => {
    const location = useLocation();
    return auth.currentUser ? (<Outlet />) : (<Navigate to="/user-login" state={{from: location}}  replace/>)
}

export default UserRoutes;