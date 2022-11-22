import React from 'react'
import { useLocation, Route, Router } from "react-router-dom";
import Notification from '../components/partials/admin/Notification'
import Sidebar from '../components/partials/admin/Sidebar'
import Header from '../components/partials/admin/Header'
import Dashboard from '../views/admin/Dashboard'
import routes from '../routes'

const AdminLayout = (props) => {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            return (
                <Route
                    path={prop.layout + prop.path}
                    render={(props) => <prop.component {...props} />}
                    key={key}
                />
            );
        });
    };
    return (
        <div className="wrapper vertical light">
            <Header />
            <Sidebar routes={routes} />
            <main role="main" className="main-content">
                {props.render}
                {/* <Dashboard /> */}
                <Notification />
            </main>
        </div>
    )
}

export default AdminLayout