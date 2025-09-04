import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <StrictMode><App /></StrictMode>,
    },
]);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />,
);
