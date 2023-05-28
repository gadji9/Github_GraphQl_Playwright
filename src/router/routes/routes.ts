import { lazy } from "react";

// ** Default Route
const DefaultRoute = "/";

// ** Merge Routes
const Routes = [
  {
    path: "/",
    element: lazy(() => import("../../views/Repositories/Repositories")),
    meta: {
      authRoute: true,
    },
    access: ["*"],
  },
  {
    path: "/:id",
    element: lazy(() => import("../../views/Repository/Repository")),
    access: ["*"],
  },
  {
    path: "/*",
    element: lazy(() => import("../../views/Error")),
    access: ["*"],
  },
];

export { DefaultRoute, Routes };
