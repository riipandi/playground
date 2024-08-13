import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

import Home from "#/pages/home";
import NotFound from "#/errors/404";
import AboutData from "#/pages/about.data";
import AuthLayout from "#/layouts/auth-layout";
import Login from "#/pages/login";
import Register from "#/pages/register";

const About = lazy(() => import("./pages/about"));

const routes: RouteDefinition[] = [
  { path: "/", component: Home },
  { path: "/about", component: About, preload: AboutData },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      { path: "/login", component: Login },
      { path: "/register", component: Register },
    ],
  },
  { path: "*404", component: NotFound },
];

export default routes;
