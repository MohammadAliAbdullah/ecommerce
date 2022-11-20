import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
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

function App() {
  const router = createBrowserRouter([{ path: "/admin", element: <AdminLayout /> }]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;