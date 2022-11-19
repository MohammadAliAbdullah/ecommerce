import React from 'react'

const Notification = () => {
    return (
        <div>
            <div className="modal fade modal-notif modal-slide" tabIndex={-1} role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-sm" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="defaultModalLabel">Notifications</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="list-group list-group-flush my-n3">
                                <div className="list-group-item bg-transparent">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <span className="fe fe-box fe-24" />
                                        </div>
                                        <div className="col">
                                            <small><strong>Package has uploaded successfull</strong></small>
                                            <div className="my-0 text-muted small">Package is zipped and uploaded</div>
                                            <small className="badge badge-pill badge-light text-muted">1m ago</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item bg-transparent">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <span className="fe fe-download fe-24" />
                                        </div>
                                        <div className="col">
                                            <small><strong>Widgets are updated successfull</strong></small>
                                            <div className="my-0 text-muted small">Just create new layout Index, form, table</div>
                                            <small className="badge badge-pill badge-light text-muted">2m ago</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-item bg-transparent">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <span className="fe fe-inbox fe-24" />
                                        </div>
                                        <div className="col">
                                            <small><strong>Notifications have been sent</strong></small>
                                            <div className="my-0 text-muted small">Fusce dapibus, tellus ac cursus commodo</div>
                                            <small className="badge badge-pill badge-light text-muted">30m ago</small>
                                        </div>
                                    </div> {/* / .row */}
                                </div>
                                <div className="list-group-item bg-transparent">
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <span className="fe fe-link fe-24" />
                                        </div>
                                        <div className="col">
                                            <small><strong>Link was attached to menu</strong></small>
                                            <div className="my-0 text-muted small">New layout has been attached to the menu</div>
                                            <small className="badge badge-pill badge-light text-muted">1h ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal">Clear All</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade modal-shortcut modal-slide" tabIndex={-1} role="dialog" aria-labelledby="defaultModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="defaultModalLabel">Shortcuts</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body px-5">
                            <div className="row align-items-center">
                                <div className="col-6 text-center">
                                    <div className="squircle bg-success justify-content-center">
                                        <i className="fe fe-cpu fe-32 align-self-center text-white" />
                                    </div>
                                    <p>Control area</p>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="squircle bg-primary justify-content-center">
                                        <i className="fe fe-activity fe-32 align-self-center text-white" />
                                    </div>
                                    <p>Activity</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-6 text-center">
                                    <div className="squircle bg-primary justify-content-center">
                                        <i className="fe fe-droplet fe-32 align-self-center text-white" />
                                    </div>
                                    <p>Droplet</p>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="squircle bg-primary justify-content-center">
                                        <i className="fe fe-upload-cloud fe-32 align-self-center text-white" />
                                    </div>
                                    <p>Upload</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-6 text-center">
                                    <div className="squircle bg-primary justify-content-center">
                                        <i className="fe fe-users fe-32 align-self-center text-white" />
                                    </div>
                                    <p>Users</p>
                                </div>
                                <div className="col-6 text-center">
                                    <div className="squircle bg-primary justify-content-center">
                                        <i className="fe fe-settings fe-32 align-self-center text-white" />
                                    </div>
                                    <p>Settings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification