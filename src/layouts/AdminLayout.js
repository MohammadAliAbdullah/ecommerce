import React from 'react'
import '../assets/app-light.css';
import { Outlet } from "react-router-dom";
import Notification from '../components/partials/admin/Notification'
import Sidebar from '../components/partials/admin/Sidebar'
import Header from '../components/partials/admin/Header'
import routes from '../config/adminMenus';

const AdminLayout = (props) => {
    return (
        <div className="wrapper vertical light">
            <Header />
            <Sidebar routes={routes} />
            <main role="main" className="main-content">
                <Outlet />
                <Notification />
            </main>
        </div>
    )
}

export default AdminLayout