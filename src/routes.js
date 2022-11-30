import AdminLayout from './layouts/AdminLayout';
import WebLayout from './layouts/WebLayout';
import AuthLayout from './layouts/AuthLayout';
// admin page
import Dashboard from "./views/admin/Dashboard";
import Profile from "./views/admin/Profile";
import Table from "./views/admin/Table";
import Typology from "./views/admin/Typology";
// web 
import Home from './views/web/Home';
import Checkout from './views/web/Checkout';
import Cart from './views/web/Cart';
import Details from './views/web/Details';
import Contact from './views/web/Contact';
import User from './views/admin/User';
// auth
import Register from './views/admin/auth/Register';
import Login from './views/admin/auth/Login';
import ResetConfirm from './views/admin/auth/ResetConfirm';
import ResetPassword from './views/admin/auth/ResetPassword';

const dashboardRoutes = [
    {
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: <Dashboard />,
                layout: "/admin",
            },
            {
                path: "/user",
                element: <User />,
                layout: "/admin",
            },
            {
                path: "/table",
                element: <Table />,
                layout: "/admin",
            },
            {
                path: "/typography",
                element: <Typology />,
                layout: "/admin",
            },
            {
                path: "/icons",
                element: 'Icons',
                layout: "/admin",
            },
            {
                path: "/notifications",
                element: 'Notifications',
                layout: "/admin",
            }
        ]
    },
    {
        element: <WebLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                layout: "/web"
            },
            {
                path: "/checkout",
                element: <Checkout />,
                layout: "/web"
            },
            {
                path: "/cart",
                element: <Cart />,
                layout: "/web"
            },
            {
                path: "/detail",
                element: <Details />,
                layout: "/web"
            },
            {
                path: "/contact",
                element: <Contact />,
                layout: "/web"
            }
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: "/register",
                element: <Register />,
                layout: "/web"
            },
            {
                path: "/login",
                element: <Login />,
                layout: "/web"
            },
            {
                path: "/reset-password",
                element: <ResetPassword />,
                layout: "/web"
            },
            {
                path: "/reset-confirm",
                element: <ResetConfirm />,
                layout: "/web"
            }
        ]
    }
]
export default dashboardRoutes;