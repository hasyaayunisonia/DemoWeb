import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import type { RootState } from '../app/store';

const PublicRoute = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return token ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
