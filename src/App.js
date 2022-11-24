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
// import routes from './routes';
import Dashboard from './views/admin/Dashboard'
import Profile from "./views/admin/Profile";
import Table from "./views/admin/Table";
import Typology from "./views/admin/Typology";
import routes from "./new_routes";

function App() {
  const routers = createBrowserRouter(routes);
  return (
    <div>
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;