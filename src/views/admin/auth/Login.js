import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAuthUserData } from "../../../helpers/auth";

const Login = () => {
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputs, setInputs] = useState([]);
    let navigate = useNavigate();

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = inputs;

        try {
            const response = await axios.post("http://localhost:1600/api/auth/signin", formData);

            if (response.data.status === 200) {
                // setItem(response.data);
                localStorage.setItem('items', JSON.stringify(response.data));
                setAuthUserData(response.data);
                setErrMsg('');
                return navigate('/admin');
            } else {
                console.log(response.data.message);
                setErrMsg(response.data.message);
            }
            // setSuccess((response.data) ? 'Login Successfully' : '');
            // setErrMsg('');
        } catch (error) {
            setErrMsg(error);
            setSuccess('');
        }
    }

    return (
        <form className="col-lg-3 col-md-4 col-10 mx-auto text-center" onSubmit={submitHandler}>
            <a className="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
                <svg version="1.1" id="logo" className="navbar-brand-img brand-md" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xmlSpace="preserve">
                    <g>
                        <polygon className="st0" points="78,105 15,105 24,87 87,87 	" />
                        <polygon className="st0" points="96,69 33,69 42,51 105,51 	" />
                        <polygon className="st0" points="78,33 15,33 24,15 87,15 	" />
                    </g>
                </svg>
            </a>
            <h1 className="h6 mb-3">Sign in</h1>
            {errMsg != '' && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>{errMsg}!</strong>
            </div>
            }
            <div className="form-group">
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="text" name="username" id="username" onChange={onChangeHandler} className="form-control form-control-lg" placeholder="User Name or Email address" required autofocus />
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" name="password" id="password" onChange={onChangeHandler} className="form-control form-control-lg" placeholder="Password" required />
            </div>
            <div className="checkbox mb-3">
                <label>
                    <input type="checkbox" defaultValue="remember-me" /> Stay logged in </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Let me in</button>
            <p className="mt-5 mb-3 text-muted">© 2020</p>
        </form>
    )
}

export default Login