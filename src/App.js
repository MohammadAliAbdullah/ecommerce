import './App.css';
import React from "react";
// import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
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
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminLayout/>
    },
    {
      path: "/b",
      element: <h1>Hello world b!</h1>,
    }
  ]);
  return (
    <div>
       <RouterProvider router={router} />
      {/* <Router>
        <Routes>
          <Route path="/" render={(props) => <AdminLayout {...props} />} />
        </Routes>
      </Router> */}
      {/* <Router>
        <Route path="/home" render={() => <div>Home</div>} />
      </Router> */}
      {/* <AdminLayout /> */}
    </div>
  );
}

export default App;
