import React from 'react'
import { useLocation, Route, Routes } from "react-router-dom";
import Notification from '../components/partials/admin/Notification'
import Sidebar from '../components/partials/admin/Sidebar'
import Header from '../components/partials/admin/Header'
import Dashboard from '../views/admin/Dashboard'
import routes from '../routes'

const AdminLayout = () => {
    function User(props) {
        return <h1>Hello {props.match.params.username}!</h1>;
    }
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
                {/* <Routes>{getRoutes(routes)}</Routes> */}
                {/* <Router>
                    <Route path="/" component={User} />
                </Router> */}
                <Notification />
            </main>
        </div>
    )
}

export default AdminLayout