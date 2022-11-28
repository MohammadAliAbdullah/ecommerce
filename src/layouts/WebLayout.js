import React, { useState, useEffect } from 'react';
import { createBrowserRouter, redirect, Link, Outlet, useLoaderData, RouterProvider, useLocation } from "react-router-dom";
import TopHeader from '../components/partials/web/TopHeader';
import Header from '../components/partials/web/Header';
import Footer from '../components/partials/web/Footer';
import HomeMenu from '../components/partials/web/HomeMenu';
import Menu from '../components/partials/web/Menu';
import Search from '../components/partials/web/Search';
import Breadcrumb from '../components/partials/web/Breadcrumb';
import Home from '../views/web/Home';


const WebLayout = () => {
    // console.log('current URL 👉️', window.location.href);
    // console.log('current Pathname 👉️', window.location.pathname);

    // 👇️ with React router
    const location = useLocation();
    // console.log('hash', location.hash);
    // console.log('pathname', location.pathname);
    // console.log('search', location.search);
    const { pathName } = useLocation();

    useEffect(() => {
        // window.location.pathname
    }, [pathName]);

    return (
        <div>
            {/* <h2>Current URL 👉️ { window.location.href }</h2>
            <h2>Current Pathname 👉️ { window.location.pathname }</h2> */}
            <Header />
            {window.location.pathname == '/' ? <HomeMenu /> : <Menu />}
            <Outlet />
            <Footer />
        </div>
    )
}

export default WebLayout