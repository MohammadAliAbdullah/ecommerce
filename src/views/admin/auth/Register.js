import axios from "axios";
import React, { useState, useEffect } from "react";
import isEmailValid from "../../../utils/Validation";
const Register = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState([]);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
        // setInputs((prev) => { return { ...prev, [name]: value } });
        // email validation 
        isEmailValid(inputs.email) ? setErrMsg('') : setErrMsg('Email Is Not Valid');
        // password validation 
        if (name == 'password') {
            (inputs.password.length < 7) ? setErrMsg('Password Minimum 8 character') : setErrMsg('');
        }
        if (name == 'confirmPassword') {
            (inputs.password != value) ? setErrMsg('Password & Confirm Password Not Match') : setErrMsg('');
        }
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = inputs;
        try {
            const response = await axios.post("http://localhost:1600/api/auth/signup", formData);
            setSuccess((response.data) ? 'Registration Successfully' : '');
            setErrMsg('');
        } catch (error) {
            setErrMsg(error.message);
            setSuccess('');
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
                    {errMsg != '' && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>{errMsg}!</strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    }
                    {success != '' && <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>{success}!</strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    }
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstname">Firstname</label>
                            <input onChange={onChangeHandler} type="text" id="firstname" className="form-control" name="firstname" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastname">Lastname</label>
                            <input onChange={onChangeHandler} type="text" id="lastname" className="form-control" name="lastname" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={onChangeHandler} type="email" className="form-control" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userName">User Name</label>
                        <input onChange={onChangeHandler} type="text" className="form-control" id="userName" name="username" />
                    </div>
                    {/* <hr className="my-4" /> */}
                    <div className="row mb-4">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="password">New Password</label>
                                <input onChange={onChangeHandler} type="password" className="form-control" id="password" name="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input onChange={onChangeHandler} name="confirmPassword" type="password" className="form-control" id="confirmPassword" />
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
                    <button className="btn btn-lg btn-primary btn-block" type="submit" disabled>Sign up</button>
                    <p className="mt-5 mb-3 text-muted text-center">© 2020</p>
                </form>
            </div>
        </div>
    )
}

export default Register