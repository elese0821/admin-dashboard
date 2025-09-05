import { createBrowserRouter } from "react-router-dom";
import DashboardPage from '@/features/dashboard/pages/DashboardPage';
import Shell from "@/layouts/Shell";
import UsersPage from "@/features/users/pages/UsersPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Shell />,
        children: [
            { index: true, element: <DashboardPage /> },
            { path: 'users', element: <UsersPage /> },
        ],
    },
]);