import { lazy } from "react";
import DefaultLayout from "components/Layout/index";

const Login = lazy(() => import("pages/Login/index"));
const Home = lazy(() => import("pages/Home/index"));
const About = lazy(() => import("pages/About/index"));
const Dashboard = lazy(() => import("pages/Dashboard/index"));

const routeConfig = [
  { path: "/", Component: Login, exact: true },
  { path: "/home", Component: Home, keepAlive: true },
  { path: "/about", Component: About },
  { path: "/dashboard", Component: Dashboard, Layout: "none" }
];

routeConfig.forEach(item => {
  item.Layout = item.Layout || DefaultLayout;
});

export default routeConfig;
