import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root";
import Home from "./Component/Home Container/Home/Home";
import AllApps from "./Component/Apps Container/All Apps/AllApps";
import AppDetails from "./Component/App Details/AppDetails";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
import Error from "./Component/Error/Error";
import InstallApps from "./Component/InstallApps/InstallApps";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Root />
      </>
    ),

    children: [
      { index: true, path: "/",
         loader: async () => {
          await new Promise(res => setTimeout(res, 100));
          return null;
        },
        Component: Home },

      {
        path: "/apps",
        loader: async () => {
          const res = await fetch("/Data.json");
          return res.json();
        },
        Component: AllApps,
      },
      {
        path: "/apps/:Id",
        loader: async () => {
          const res = await fetch("/Data.json");
          return res.json();
        },
        Component: AppDetails,
      },
      {
        path: "/installApps",
        loader:()=>fetch('/Data.json'),
        Component: InstallApps,
      },

      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
