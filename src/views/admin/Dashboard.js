import React from 'react'
import adminMenus from '../../utils/adminMenus';

const Dashboard = () => {
    const children = {
        backgroundColor: '#f7e5e4',
    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="page-title">Let's start</h1>
                        <h1>You see the Dashboard</h1>
                        {
                            adminMenus.map((prop, i) => {
                                return (
                                    <div>
                                        {
                                            prop.children.map((item, idx) => {
                                                return (
                                                    <div style={children}>
                                                        <li> {item.path} </li>
                                                        <li> {item.name} </li>
                                                    </div>
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