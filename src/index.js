import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Registration from "./pages/Registration";
import JoinUs from "./pages/JoinUs";
import ContactUS from "./pages/ContactUS";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },

    {
        path: "aboutUs",
        element: <AboutUs/>,
    },

    {
        path: "registration",
        element: <Registration/>,
    },

    {
        path: "contactUs",
        element: <ContactUS/>,
    },

    {
        path: "joinUs",
        element: <JoinUs/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />


);


