import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./BudgetApp/Layout/main";
import TransactionForm from "./BudgetApp/Transaction/form";
import UserForm from "./BudgetApp/User/form";
import "./index.css";
import Home from "./BudgetApp/Home";
import ErrorPage from "./utils/Error";
import BudgetForm from "./BudgetApp/Budget/form";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            {
                path: "transaction",
                element: <TransactionForm />,
                errorElement: <ErrorPage />,
            },
            {
                path: "budget",
                element: <BudgetForm />,
                errorElement: <ErrorPage />,
            },
            {
                path: "user",
                element: <UserForm />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
