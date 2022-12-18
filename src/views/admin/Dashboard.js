import React, { useEffect } from 'react';
import adminMenus from '../../config/adminMenus';
import { auth } from '../../helpers/auth';

const Dashboard = () => {
    const children = {
        backgroundColor: '#f7e5e4',
    }

    useEffect(() => {
        console.log(auth().email); 
    }, [auth])

    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h1 className="page-title">Let's start</h1>
                        <h3>You see the Dashboard</h3>
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