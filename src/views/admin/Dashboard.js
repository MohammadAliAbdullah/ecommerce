import React from 'react'
import routes from "../../rot";

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="page-title">Let's start</h1>
                        <h1>You see the Dashboard</h1>
                        {
                            routes.map((prop, i) => {
                                return (
                                    <div>
                                        {prop.children}
                                        {
                                            prop.children.map((item, idx) => {
                                                return (
                                                    <> {item.path} </>
                                                );
                                            })
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard