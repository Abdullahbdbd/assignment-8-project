import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Component/Root/Root";
import Home from "./Component/Home Container/Home/Home";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "/", Component: Home } 
    ],
  },
  {
    path: "*",
    element: <h1>Page not found this time</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
