import { lazy } from "react";

const FormLaporanKerusakan = lazy(
  () => import("../pages/FormLaporanKerusakan")
);

const Dashboard = lazy(() => import("../pages/Dasboard"));

export const privateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/laporan-kerusakan",
    element: <FormLaporanKerusakan />,
  },
];
