import React, { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../../helpers/api";
import { useMemo } from 'react';

const User = () => {
    const [users, setUser] = useState([]);
    // const visibleTodos = useMemo(() => {''});
    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async (formData) => {
        try {
            // const response = await axios.get('http://localhost:1600/api/auth/users');
            // setUser(response.data);
            // console.log(response.data);
            const data = await api("get", "auth/users", formData);
            console.log(data);
            setUser(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.activeStatus ? <span className="badge badge-info">Active</span> : <span className="badge badge-secondary">Inactive</span>}</td>
                            <td>
                                <button to={`edit/${user._id}`} className="btn btn-success btn-sm">
                                    Edit
                                </button>
                                |
                                <button className="btn btn-danger btn-sm">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default User