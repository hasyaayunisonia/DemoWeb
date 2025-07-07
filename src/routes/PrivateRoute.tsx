import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store';
import Layout from '@/layouts';

const PrivateRoute = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return token ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
