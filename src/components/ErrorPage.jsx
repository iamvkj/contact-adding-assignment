import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
            <div className="container-fluid main_header">
                <div className="rows">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="rows">
                            {/* Right Side Div */}
                            <div className="col-md-12 col-12 main_header_left align-items-center">
                                <figure className="errimg">
                                    <img className="img-fluid" src="assets/images/404-ecowrap.png" alt="error" />
                                </figure>
                                <p>Welcome to Contact App</p>
                                <h1>Opps! Page Not Found</h1>
                                <NavLink to="/"><button>Go Back</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;