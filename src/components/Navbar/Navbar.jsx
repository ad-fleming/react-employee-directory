import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css"


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to = "/react-employee-directory">
                React Employee Search
            </Link>
            <div className="collabse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link 
                            to="/react-employee-directory"
                            className={
                                window.location.pathname === "/react-employee-directory" || window.location.pathname === "/react-employee-directory"
                                ? "nav-link active"
                                : "nav-link"
                            }
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            to="/react-employee-directory/search"
                            className={
                                window.location.pathname === "/react-employee-directory" ? "nav-link active" : "nav-link"}
                        >
                            Search
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
