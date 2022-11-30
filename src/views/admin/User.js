import React from 'react'

const User = () => {
    return (
        <div>
            <div className="col-12">
                <div className="row">
                    <div className="card-body">
                        <div className="toolbar">
                            <form className="form">
                                <div className="form-row">
                                    <div className="form-group col-auto mr-auto">
                                        <label className="my-1 mr-2 sr-only" htmlFor="inlineFormCustomSelectPref1">Show</label>
                                        <select className="custom-select mr-sm-2" id="inlineFormCustomSelectPref1">
                                            <option value>...</option>
                                            <option value={1}>12</option>
                                            <option value={2} selected>32</option>
                                            <option value={3}>64</option>
                                            <option value={3}>128</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-auto">
                                        <label htmlFor="search" className="sr-only">Search</label>
                                        <input type="text" className="form-control" id="search1" defaultValue placeholder="Search" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* table */}
                        <table className="table table-border table-hover">
                            <thead>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="all2" />
                                            <label className="custom-control-label" htmlFor="all2" />
                                        </div>
                                    </td>
                                    <th>ID</th>
                                    <th>User</th>
                                    <th>Company</th>
                                    <th>Contact</th>
                                    <th className="w-25">Bio</th>
                                    <th>Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id={2474} />
                                            <label className="custom-control-label" htmlFor={2474} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar avatar-md">
                                            <img src="./assets/avatars/face-3.jpg" alt="..." className="avatar-img rounded-circle" />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><strong>Brown, Asher D.</strong></p>
                                        <small className="mb-0 text-muted">2474</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted">Accumsan Consulting</p>
                                        <small className="mb-0 text-muted">Ap #331-7123 Lobortis Avenue</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><a href="#" className="text-muted">(958) 421-0798</a></p>
                                        <small className="mb-0 text-muted">Nigeria</small>
                                    </td>
                                    <td className="w-25"><small className="text-muted"> Egestas integer eget aliquet nibh praesent. In hac
                                        habitasse platea dictumst quisque sagittis purus.</small></td>
                                    <td className="text-muted">13/09/2020</td>
                                    <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-muted sr-only">Action</span>
                                    </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Remove</a>
                                            <a className="dropdown-item" href="#">Assign</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id={2786} />
                                            <label className="custom-control-label" htmlFor={2786} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar avatar-md">
                                            <img src="./assets/avatars/face-1.jpg" alt="..." className="avatar-img rounded-circle" />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><strong>Leblanc, Yoshio V.</strong></p>
                                        <small className="mb-0 text-muted">2786</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted">Fringilla Ornare Placerat Consulting</p>
                                        <small className="mb-0 text-muted">287-8300 Nisl. St</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><a href="#" className="text-muted">(899) 881-3833</a></p>
                                        <small className="mb-0 text-muted">Papua New Guinea</small>
                                    </td>
                                    <td className="w-25"><small className="text-muted"> Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small></td>
                                    <td className="text-muted">04/05/2019</td>
                                    <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-muted sr-only">Action</span>
                                    </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Remove</a>
                                            <a className="dropdown-item" href="#">Assign</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id={2747} />
                                            <label className="custom-control-label" htmlFor={2747} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar avatar-md">
                                            <img src="./assets/avatars/face-2.jpg" alt="..." className="avatar-img rounded-circle" />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><strong>Hester, Nissim L.</strong></p>
                                        <small className="mb-0 text-muted">2747</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted">Tristique Ltd</p>
                                        <small className="mb-0 text-muted">4577 Cras St.</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><a href="#" className="text-muted">(977) 220-6518</a></p>
                                        <small className="mb-0 text-muted">Central African Republic</small>
                                    </td>
                                    <td className="w-25"><small className="text-muted"> Non tellus orci ac auctor augue. Elit at imperdiet
                                        dui accumsan sit.</small></td>
                                    <td className="text-muted">21/08/2019</td>
                                    <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-muted sr-only">Action</span>
                                    </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Remove</a>
                                            <a className="dropdown-item" href="#">Assign</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id={2639} />
                                            <label className="custom-control-label" htmlFor={2639} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar avatar-md">
                                            <img src="./assets/avatars/face-4.jpg" alt="..." className="avatar-img rounded-circle" />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><strong>Gardner, Leigh S.</strong></p>
                                        <small className="mb-0 text-muted">2639</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted">Orci Luctus Et Inc.</p>
                                        <small className="mb-0 text-muted">P.O. Box 228, 7512 Lectus Ave</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><a href="#" className="text-muted">(537) 315-1481</a></p>
                                        <small className="mb-0 text-muted">United Kingdom</small>
                                    </td>
                                    <td className="w-25"><small className="text-muted"> Nunc pulvinar sapien et ligula ullamcorper
                                        malesuada proin. Neque convallis a cras semper auctor</small></td>
                                    <td className="text-muted">04/08/2019</td>
                                    <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-muted sr-only">Action</span>
                                    </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Remove</a>
                                            <a className="dropdown-item" href="#">Assign</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id={2238} />
                                            <label className="custom-control-label" htmlFor={2238} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar avatar-md">
                                            <img src="./assets/avatars/face-5.jpg" alt="..." className="avatar-img rounded-circle" />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><strong>Higgins, Uriah L.</strong></p>
                                        <small className="mb-0 text-muted">2238</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted">Sit Amet Lorem Industries</p>
                                        <small className="mb-0 text-muted">Ap #377-5357 Sed Road</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><a href="#" className="text-muted">(238) 386-0247</a></p>
                                        <small className="mb-0 text-muted">Canada</small>
                                    </td>
                                    <td className="w-25"><small className="text-muted"> Libero id faucibus nisl tincidunt eget. Leo a diam
                                        sollicitudin tempor id. </small></td>
                                    <td className="text-muted">26/07/2020</td>
                                    <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-muted sr-only">Action</span>
                                    </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Remove</a>
                                            <a className="dropdown-item" href="#">Assign</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id={2152} />
                                            <label className="custom-control-label" htmlFor={2152} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar avatar-md">
                                            <img src="./assets/avatars/face-6.jpg" alt="..." className="avatar-img rounded-circle" />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><strong>Wheeler, Ralph F.</strong></p>
                                        <small className="mb-0 text-muted">2152</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted">Suspendisse LLC</p>
                                        <small className="mb-0 text-muted">Ap #410-5363 Non, Avenue</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><a href="#" className="text-muted">(587) 675-3258</a></p>
                                        <small className="mb-0 text-muted">Chad</small>
                                    </td>
                                    <td className="w-25"><small className="text-muted"> Libero id faucibus nisl tincidunt eget. Leo a diam
                                        sollicitudin tempor id. </small></td>
                                    <td className="text-muted">11/09/2019</td>
                                    <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-muted sr-only">Action</span>
                                    </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Remove</a>
                                            <a className="dropdown-item" href="#">Assign</a>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id={2488} />
                                            <label className="custom-control-label" htmlFor={2488} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="avatar avatar-md">
                                            <img src="./assets/avatars/face-7.jpg" alt="..." className="avatar-img rounded-circle" />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><strong>Kelley, Sonya Y.</strong></p>
                                        <small className="mb-0 text-muted">2488</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted">Dolor Incorporated</p>
                                        <small className="mb-0 text-muted">8250 Molestie St.</small>
                                    </td>
                                    <td>
                                        <p className="mb-0 text-muted"><a href="#" className="text-muted">(934) 582-9495</a></p>
                                        <small className="mb-0 text-muted">British Indian Ocean Territory</small>
                                    </td>
                                    <td className="w-25"><small className="text-muted"> A lacus vestibulum sed arcu non odio euismod
                                        lacinia. In tellus integer feugiat scelerisque.</small></td>
                                    <td className="text-muted">30/03/2021</td>
                                    <td><button className="btn btn-sm dropdown-toggle more-horizontal" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="text-muted sr-only">Action</span>
                                    </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Edit</a>
                                            <a className="dropdown-item" href="#">Remove</a>
                                            <a className="dropdown-item" href="#">Assign</a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <nav aria-label="Table Paging" className="mb-0 text-muted">
                            <ul className="pagination justify-content-center mb-0">
                                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default User