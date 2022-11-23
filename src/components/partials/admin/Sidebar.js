import React from 'react'
import { NavLink } from "react-router-dom";

const Sidebar = ({ routes }) => {
    return (
        <div>
            <aside className="sidebar-left border-right bg-white shadow" id="leftSidebar" data-simplebar>
                <a href="#" className="btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3" data-toggle="toggle">
                    <i className="fe fe-x"><span className="sr-only" /></i>
                </a>
                <nav className="vertnav navbar navbar-light">
                    {/* nav bar */}
                    <div className="w-100 mb-4 d-flex">
                        <a className="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
                            <svg version="1.1" id="logo" className="navbar-brand-img brand-sm" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xmlSpace="preserve">
                                <g>
                                    <polygon className="st0" points="78,105 15,105 24,87 87,87 	" />
                                    <polygon className="st0" points="96,69 33,69 42,51 105,51 	" />
                                    <polygon className="st0" points="78,33 15,33 24,15 87,15 	" />
                                </g>
                            </svg>
                        </a>
                    </div>
                    <ul className="navbar-nav flex-fill w-100 mb-2">
                        <li className="nav-item dropdown">
                            <a href="#dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                                <i className="fe fe-home fe-16" />
                                <span className="ml-3 item-text">Dashboard</span><span className="sr-only">(current)</span>
                            </a>
                            <ul className="collapse list-unstyled pl-4 w-100" id="dashboard">
                                <li className="nav-item active">
                                    <a className="nav-link pl-3" href="./index.html"><span className="ml-1 item-text">Default</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Components</span>
                    </p>
                    <ul className="navbar-nav flex-fill w-100 mb-2">
                        {routes.map((prop, key) => {
                            if (!prop.redirect)
                                return (
                                    (prop.childs) ?
                                        <li className="nav-item dropdown">
                                            <a href="#ui-elements" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle nav-link">
                                                <i className={prop.icon} />
                                                <span className="ml-3 item-text">{prop.name}</span>
                                            </a>
                                            <ul class="collapse list-unstyled pl-4 w-100" id="ui-elements">
                                                {
                                                    prop.childs.map((child, key) => {
                                                        return (
                                                            <li className="nav-item active">
                                                                <NavLink to="b" className="nav-link pl-3">
                                                                    <span className="ml-1 item-text">
                                                                        {child.name}
                                                                    </span>
                                                                </NavLink>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </li>
                                        :
                                        <li className="nav-item w-100">
                                            <NavLink to={prop.path} className="nav-link">
                                                <i className={prop.icon} />
                                                <span className="ml-3 item-text">
                                                    {prop.name}
                                                    </span>
                                            </NavLink>
                                        </li>
                                );
                            return null;
                        })}
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default Sidebar