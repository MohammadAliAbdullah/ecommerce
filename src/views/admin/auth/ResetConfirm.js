import React from 'react'

const ResetConfirm = () => {
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
                        <h4 className="my-3">Password reset successfully!</h4>
                    </div>
                    <div className="alert alert-success" role="alert"> An email has been sent to your email <strong>email@example.com</strong>. Please check your email to get reset link </div>
                    <a href="./index.html" className="btn btn-lg btn-primary btn-block">Back to home</a>
                    <p className="mt-5 mb-3 text-muted">© 2020</p>
                </form>
            </div>
        </div>

    )
}

export default ResetConfirm