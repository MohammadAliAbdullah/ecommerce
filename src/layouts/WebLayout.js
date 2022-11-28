import React, { useState, useEffect } from 'react';
import '../assets/style.css';
import { createBrowserRouter, redirect, Link, Outlet, useLoaderData, RouterProvider, useLocation } from "react-router-dom";
import Header from '../components/partials/web/Header';
import Footer from '../components/partials/web/Footer';
import HomeMenu from '../components/partials/web/HomeMenu';
import Menu from '../components/partials/web/Menu';

const WebLayout = () => {
    // 👇️ with React router
    const location = useLocation();
    const { pathName } = useLocation();

    useEffect(() => {
        // window.location.pathname
    }, [pathName]);

    return (
        <div>
            <Header />
            {window.location.pathname == '/' ? <HomeMenu /> : <Menu />}
            <Outlet />
            <Footer />
        </div>
    )
}

export default WebLayout