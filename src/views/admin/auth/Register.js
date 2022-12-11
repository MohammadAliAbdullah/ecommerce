import axios from "axios";
import React, { useState, useEffect } from "react";


const Register = () => {
    const [firstname, SetFirstName] = useState("");
    const [lastname, SetLastName] = useState("");
    const [username, SetUserName] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("");
    // success
    const [success, SetSuccess] = useState(false);
    // faill 
    const [error, SetError] = useState(false);
    // loading 
    const [loading, SetLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            firstname,
            lastname,
            username,
            email,
            password,
        }
        console.log(data);
        try {
            const response = await axios.post("http://localhost:1600/api/auth/signup", data);
            console.log(response);
        } catch (error) {

        }

    }
    return (
        <div class="wrapper vh-100">
            <div class="row align-items-center h-100">
                <form className="col-lg-4 col-md-8 col-8 mx-auto" onSubmit={submitHandler}>
                    <div className="mx-auto text-center my-4">
                        <a className="navbar-brand mx-auto mt-2 flex-fill text-center" href="#">
                            <svg version="1.1" id="logo" className="navbar-brand-img brand-md" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xmlSpace="preserve">
                                <g>
                                    <polygon className="st0" points="78,105 15,105 24,87 87,87 	" />
                                    <polygon className="st0" points="96,69 33,69 42,51 105,51 	" />
                                    <polygon className="st0" points="78,33 15,33 24,15 87,15 	" />
                                </g>
                            </svg>
                        </a>
                        <h2 className="my-3">Register</h2>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstname">Firstname</label>
                            <input onChange={(e) => SetFirstName(e.target.value)} type="text" id="firstname" className="form-control" name="firstname" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastname">Lastname</label>
                            <input onChange={(e) => SetLastName(e.target.value)} type="text" id="lastname" className="form-control" name="lastname" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => SetEmail(e.target.value)} type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userName">User Name</label>
                        <input onChange={(e) => SetUserName(e.target.value)} type="text" className="form-control" id="userName" name="username" />
                    </div>
                    {/* <hr className="my-4" /> */}
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="password">New Password</label>
                                <input onChange={(e) => SetPassword(e.target.value)} type="password" className="form-control" id="password" name="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword6">Confirm Password</label>
                                <input onChange={(e) => SetConfirmPassword(e.target.value)} type="password" className="form-control" id="inputPassword6" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <p className="mb-2">Password requirements</p>
                            <p className="small text-muted mb-2"> To create a new password, you have to meet all of the following requirements: </p>
                            <ul className="small text-muted pl-4 mb-0">
                                <li> Minimum 8 character </li>
                                <li>At least one special character</li>
                                <li>At least one number</li>
                                <li>Can’t be the same as a previous password </li>
                            </ul>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted text-center">© 2020</p>
                </form>
            </div>
        </div>
    )
}

export default Register