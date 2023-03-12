import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
import MainLayout from "../layouts/main";
import DashboardLayout from "../layouts/dashboard";
import LoginLayout from "../layouts/login";

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();

  return (
    <Suspense
      fallback={<LoadingScreen isDashboard={pathname.includes("/dashboard")} />}
    >
      <Component {...props} />
    </Suspense>
  );
};
//element: <AuthGuard><InstantTrade /></AuthGuard>
export default function Router() {
  return useRoutes([
    {
      path: "auth",
      element: <LoginLayout />,
      children: [
        {
          path: "login",
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          ),
        },

        { path: "login-unprotected", element: <Login /> },
        { path: "logout", element: <Logout /> },
      ],
    },
    {
      path: "dashboard",
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="jobs/list" replace />, index: true },
        { path: "jobs/list", element: <DashboardHome />, index: true },
        { path: "jobs/detail/:id", element: <JobDetail /> },
        { path: "history", element: <History /> },
        
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          index: true,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
}
const HomePage = Loadable(lazy(() => import("../pages/Home")));
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Logout = Loadable(lazy(() => import("../pages/auth/Logout")));

const NotFound = Loadable(lazy(() => import("../pages/Page404")));
const DashboardHome = Loadable(
  lazy(() => import("../pages/dashboard/DashboardHome"))
);
const JobDetail = Loadable(lazy(() => import("../pages/dashboard/JobDetail")));
const History = Loadable(lazy(() => import("../pages/dashboard/History")));
