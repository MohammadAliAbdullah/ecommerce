import React from 'react'

const ResetPassword = () => {
    return (
        <div className="wrapper vh-100">
            <div className="row align-items-center h-100">
                <form className="col-lg-3 col-md-4 col-10 mx-auto text-center">
                    <div className="mx-auto text-center my-4">
                        <a className="navbar-brand mx-auto mt-2 flex-fill text-center" href="./index.html">
                            <svg version="1.1" id="logo" className="navbar-brand-img brand-md" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 120 120" xmlSpace="preserve">
                                <g>
                                    <polygon className="st0" points="78,105 15,105 24,87 87,87 	" />
                                    <polygon className="st0" points="96,69 33,69 42,51 105,51 	" />
                                    <polygon className="st0" points="78,33 15,33 24,15 87,15 	" />
                                </g>
                            </svg>
                        </a>
                        <h2 className="my-3">Reset Password</h2>
                    </div>
                    <p className="text-muted">Enter your email address and we'll send you an email with instructions to reset your password</p>
                    <div className="form-group">
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control form-control-lg" placeholder="Email address" required autofocus />
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Reset Password</button>
                    <p className="mt-5 mb-3 text-muted">© 2020</p>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword