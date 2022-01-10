import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { NavLink } from 'react-router-dom'

//React router dom componnent:
import { Route } from 'react-router-dom';

function Header() {

    // const navLinks = [
    //     {
    //         id: 1,
    //         name: "AboutMe",
    //         description:
    //             "Developer biography"
    //     },
    //     {
    //         id: 2,
    //         name: "Projects",
    //         description: "A list of my last 6 projects"
    //     },
    //     {
    //         id: 3,
    //         name: "Resume",
    //         description: "My Resume"
    //     },
    //     {
    //         id: 4,
    //         name: "Contact",
    //         description: "Contact Page"
    //     },
    // ];



    return (
        <header className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                    <h1 className="p-2 text-white">JEFFREY ANDERSON-LESTER</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="Profile">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="../Projects">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="../Resume">My Resume</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="../Contact">Contact Me</NavLink>
                            </li>

                        </ul>

                    </div>
                </nav>
            </div>
        </header>

    );
}

export default Header;