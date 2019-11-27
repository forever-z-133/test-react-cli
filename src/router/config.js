import { lazy } from "react";
import DefaultLayout from "components/Layout/index";
const { NoneLayout } = DefaultLayout;

const Login = lazy(() => import("pages/Login/index"));
const Home = lazy(() => import("pages/Home/index"));
const About = lazy(() => import("pages/About/index"));
const Dashboard = lazy(() => import("pages/Dashboard/index"));

const routeConfig = [
  { path: "/", Component: Home, exact: true },
  { path: "/login", Component: Login, keepAlive: true, withAuth: false },
  { path: "/home", Component: Home },
  { path: "/about", Component: About },
  { path: "/dashboard", Component: Dashboard, Layout: "none" }
];

routeConfig.forEach(item => {
  let { Layout } = item;
  if (Layout === "none") Layout = NoneLayout;
  else if (!Layout || Layout === "default") Layout = DefaultLayout;
  item.Layout = Layout;
});

export default routeConfig;
