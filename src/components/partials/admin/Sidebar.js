import React from 'react'

const Sidebar = () => {
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
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./dashboard-analytics.html"><span className="ml-1 item-text">Analytics</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./dashboard-sales.html"><span className="ml-1 item-text">E-commerce</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./dashboard-saas.html"><span className="ml-1 item-text">Saas
                                        Dashboard</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./dashboard-system.html"><span className="ml-1 item-text">Systems</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p className="text-muted nav-heading mt-4 mb-1">
                        <span>Components</span>
                    </p>
                    <ul className="navbar-nav flex-fill w-100 mb-2">
                        <li className="nav-item dropdown">
                            <a href="#ui-elements" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                                <i className="fe fe-box fe-16" />
                                <span className="ml-3 item-text">UI elements</span>
                            </a>
                            <ul className="collapse list-unstyled pl-4 w-100" id="ui-elements">
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./ui-color.html"><span className="ml-1 item-text">Colors</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./ui-typograpy.html"><span className="ml-1 item-text">Typograpy</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./ui-icons.html"><span className="ml-1 item-text">Icons</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./ui-buttons.html"><span className="ml-1 item-text">Buttons</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./ui-notification.html"><span className="ml-1 item-text">Notifications</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./ui-modals.html"><span className="ml-1 item-text">Modals</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./ui-tabs-accordion.html"><span className="ml-1 item-text">Tabs &amp;
                                        Accordion</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./ui-progress.html"><span className="ml-1 item-text">Progress</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item w-100">
                            <a className="nav-link" href="widgets.html">
                                <i className="fe fe-layers fe-16" />
                                <span className="ml-3 item-text">Widgets</span>
                                <span className="badge badge-pill badge-primary">New</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#forms" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                                <i className="fe fe-credit-card fe-16" />
                                <span className="ml-3 item-text">Forms</span>
                            </a>
                            <ul className="collapse list-unstyled pl-4 w-100" id="forms">
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./form_elements.html"><span className="ml-1 item-text">Basic
                                        Elements</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./form_advanced.html"><span className="ml-1 item-text">Advanced
                                        Elements</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./form_validation.html"><span className="ml-1 item-text">Validation</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./form_wizard.html"><span className="ml-1 item-text">Wizard</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./form_layouts.html"><span className="ml-1 item-text">Layouts</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./form_upload.html"><span className="ml-1 item-text">File upload</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#tables" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                                <i className="fe fe-grid fe-16" />
                                <span className="ml-3 item-text">Tables</span>
                            </a>
                            <ul className="collapse list-unstyled pl-4 w-100" id="tables">
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./table_basic.html"><span className="ml-1 item-text">Basic Tables</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./table_advanced.html"><span className="ml-1 item-text">Advanced
                                        Tables</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./table_datatables.html"><span className="ml-1 item-text">Data
                                        Tables</span></a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#charts" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle nav-link">
                                <i className="fe fe-pie-chart fe-16" />
                                <span className="ml-3 item-text">Charts</span>
                            </a>
                            <ul className="collapse list-unstyled pl-4 w-100" id="charts">
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./chart-inline.html"><span className="ml-1 item-text">Inline Chart</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./chart-chartjs.html"><span className="ml-1 item-text">Chartjs</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./chart-apexcharts.html"><span className="ml-1 item-text">ApexCharts</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pl-3" href="./datamaps.html"><span className="ml-1 item-text">Datamaps</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}

export default Sidebar