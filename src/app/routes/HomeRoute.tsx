import type { RouteObject } from "react-router-dom";
import { Home } from "@src/pages/home";

export const HomeRoute: RouteObject = {
  path: "/",
  element: <Home />,
};
