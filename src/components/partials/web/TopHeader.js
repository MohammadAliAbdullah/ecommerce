import React from 'react'

const TopHeader = () => {
    return (
        <div>
            <div className="row bg-secondary py-2 px-xl-5">
                <div className="col-lg-6 d-none d-lg-block">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-dark" href>FAQs</a>
                        <span className="text-muted px-2">|</span>
                        <a className="text-dark" href>Help</a>
                        <span className="text-muted px-2">|</span>
                        <a className="text-dark" href>Support</a>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-dark px-2" href>
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a className="text-dark px-2" href>
                            <i className="fab fa-twitter" />
                        </a>
                        <a className="text-dark px-2" href>
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a className="text-dark px-2" href>
                            <i className="fab fa-instagram" />
                        </a>
                        <a className="text-dark pl-2" href>
                            <i className="fab fa-youtube" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader
