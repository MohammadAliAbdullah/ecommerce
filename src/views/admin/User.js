import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:1600/api/auth/users");
            // console.log(response.data);
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <table className="table is-striped is-fullwidth mt-2">
                <thead>
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
                            <td>{user.activeStatus ? 'Active' : 'Inactive'}</td>
                            <td>
                                <button to={`edit/${user._id}`} className="btn btn-success btn-sm">
                                    Edit
                                </button>
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