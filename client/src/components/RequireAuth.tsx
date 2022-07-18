import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const RequireAuth = ({ allowedRoles }) => {
  const  { auth } = useAuth();
  const location = useLocation();

  return (
    auth.role && allowedRoles.includes(auth?.role)
      ? <Outlet />
      : auth?.user
        ? <Navigate to="/" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
