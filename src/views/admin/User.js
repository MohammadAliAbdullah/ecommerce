import React, { useState, useEffect } from "react";
import configAxios from './config';

const User = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        alert(configAxios);
        // configAxios();
    }, []);

    // const getUsers = async (e) => {
    //     e.preventDefault();
    //     try {
    //         alert("Please enter something error");
    //         const response = await axios.get('localhost:1600/api/auth/users');
    //         console.log(response.data);
    //         setUser('response.data');

    //     } catch (error) {
    //         console.log(error.response.data.error)
    //     }
    // };

    // const deleteUser = async (id) => {
    //   try {
    //     await axios.delete(`http://localhost:5000/users/${id}`);
    //     getUsers();
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    return (
        <div>
            <ul>44</ul>
        </div>
    )
}

export default User