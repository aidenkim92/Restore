import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import BasketPage from "../../features/basket/BasketPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomPage";
import NotFound from "../errors/NotFound";
import ServerError from "../errors/ServerError";
import App from "../layout/App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <HomePage />},
            {path: "catalog", element: <Catalog />},
            {path: "/catalog/:id", element: <ProductDetails />},
            {path: "/about", element: <AboutPage />},
            {path: "/server-error", element: <ServerError />},
            {path: "/contact", element: <ContactPage />},
            {path: "/basket", element: <BasketPage />},
            {path: "/login", element: <Login />},
            {path: "/register", element: <Register />},
            {path: "/checkout", element: <CheckoutPage />},
            {path: "/not-found", element: <NotFound />},
            {path: "*", element: <Navigate replace to= "/not-found" />}
        ]
    }
])