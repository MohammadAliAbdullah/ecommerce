import React from 'react'
import { createBrowserRouter, redirect, Link, Outlet, useLoaderData, RouterProvider } from "react-router-dom";
import { NavLink } from "react-router-dom";

const WebLayout = () => {
    return (
        <div>
            <h1> Common Header</h1>
            <nav>
                <NavLink to="/page1" className="nav-link"> Page 1 </NavLink>
                <NavLink to="/page2" className="nav-link"> Page 2 </NavLink>
                <NavLink to="/page3" className="nav-link"> Page 3 </NavLink>
            </nav>
            <Outlet />
            <h1> Common Footer</h1>
        </div>
    )
}

export default WebLayout