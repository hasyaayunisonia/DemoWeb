// routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import { privateRoutes } from './privateRoutes';
import { publicRoutes } from './publicRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { CircularProgress, Box, Typography } from '@mui/material';

const LoadingFallback = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CircularProgress size={60} thickness={4} color="primary" />
      <Typography mt={2} variant="h6" color="textSecondary">
        Loading...
      </Typography>
    </Box>
  );
};

const AppRoutes = () => (
  <Suspense fallback={<LoadingFallback />}>
    <Routes>
      <Route element={<PublicRoute />}>
        {publicRoutes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
      </Route>

      <Route element={<PrivateRoute />}>
        {privateRoutes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
      </Route>
    </Routes>
  </Suspense>
);

export default AppRoutes;
