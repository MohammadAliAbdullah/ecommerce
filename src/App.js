import './App.css';
import React from "react";
import { createBrowserRouter, redirect, Link, Outlet, useLoaderData, RouterProvider } from "react-router-dom";
import AdminLayout from './layouts/AdminLayout';
import Header from './components/partials/Header'
import Search from './components/partials/Search'
import Menu from './components/partials/Menu'
import Footer from './components/partials/Footer';
import Home from './views/web/Home';
import Shop from './views/web/Shop';
import MenuTwo from './components/partials/MenuTwo';
import Checkout from './views/web/Checkout';
import Cart from './views/web/Cart';
import Details from './views/web/Details';
import Contact from './views/web/Contact';
import routes from './routes';
import Dashboard from './views/admin/Dashboard'
import Profile from "./views/admin/Profile";
import Table from "./views/admin/Table";
import Typology from "./views/admin/Typology";

function App() {
  // const router = createBrowserRouter([{ path: "/admin", element: <AdminLayout /> }]);
  const routers = createBrowserRouter([
    {
      element: <AdminLayout />,
      children: [
        {
          path: "/dashboard",
          name: "Elements",
          icon: "fe fe-box fe-1",
          element: <Dashboard />,
          layout: "/admin",
          childs: [
            {
              path: "/table",
              name: "Modals",
              icon: "fe fe-credit-card fe-16",
              element: 'TableList',
              layout: "/admin",
            },
            {
              path: "/typography",
              name: "Tabs & Accordion",
              icon: "fe fe-grid fe-16",
              element: 'Typography',
              layout: "/admin",
            },
            {
              path: "/icons",
              name: "Progress",
              icon: "fe fe-pie-chart fe-16",
              element: 'Icons',
              layout: "/admin",
            },
            {
              path: "/user",
              name: "User Profile",
              icon: "fe fe-layers fe-16",
              element: <Profile />,
              layout: "/admin",
            },
            {
              path: "/table",
              name: "Table List",
              icon: "fe fe-credit-card fe-16",
              element: <Table />,
              layout: "/admin",
            }
          ]
        },
        {
          path: "/user",
          name: "User Profile",
          icon: "fe fe-layers fe-16",
          element: <Profile />,
          layout: "/admin",
        },
        {
          path: "/table",
          name: "Table List",
          icon: "fe fe-credit-card fe-16",
          element: <Table />,
          layout: "/admin",
        },
        {
          path: "/typography",
          name: "Typography",
          icon: "fe fe-grid fe-16",
          element: <Typology />,
          layout: "/admin",
        },
        {
          path: "/icons",
          name: "Icons",
          icon: "fe fe-pie-chart fe-16",
          element: 'Icons',
          layout: "/admin",
        },
        {
          path: "/notifications",
          name: "Notifications",
          icon: "fe fe-compass fe-16",
          element: 'Notifications',
          layout: "/admin",
        },
        {
          path: "/user",
          name: "Help Desk",
          icon: "fe fe-layers fe-16",
          element: 'UserProfile',
          layout: "/admin",
        },
        {
          path: "/table",
          name: "File Manager",
          icon: "fe fe-credit-card fe-16",
          element: 'TableList',
          layout: "/admin",
        },
        {
          path: "/typography",
          name: "Calendar",
          icon: "fe fe-grid fe-16",
          element: 'Typography',
          layout: "/admin",
        },
        {
          path: "/notifications",
          name: "Authentication",
          icon: "fe fe-compass fe-16",
          element: 'Notifications',
          layout: "/admin",
        },
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;