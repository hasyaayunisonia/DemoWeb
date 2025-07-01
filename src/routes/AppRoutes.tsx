// routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { privateRoutes } from "./privateRoutes";
import { publicRoutes } from "./publicRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => (
  <Suspense fallback={<div>Loading...</div>}>
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
