import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BudgetForm from "./components/BudgetApp/Budget/form";
import Home from "./components/BudgetApp/Home";
import TransactionForm from "./components/BudgetApp/Transaction/form";
import UserForm from "./components/BudgetApp/User/form";
import LoginForm from "./components/BudgetApp/User/login";
import RegisterForm from "./components/BudgetApp/User/register";
import App from "./app";
import "./index.css";
import ErrorPage from "./utils/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <Home /> },
            { path: "auth/login", element: <LoginForm /> },
            { path: "auth/register", element: <RegisterForm /> },
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
                children: [],
            },
            {
                path: "login",
                element: <LoginForm />,
                errorElement: <ErrorPage />,
            },
            {
                path: "register",
                element: <RegisterForm />,
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
