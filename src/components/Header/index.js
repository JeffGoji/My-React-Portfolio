import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { NavLink } from 'react-router-dom'

//React router dom componnent:
import { Route } from 'react-router-dom';

function Header() {

    const navLinks = [
        {
            name: "AboutMe",
            description:
                "Developer biography"
        },
        {
            name: "Projects",
            description: "A list of my last 6 projects"
        },
        {
            name: "Resume",
            description: "My Resume"
        },
        {
            name: "Contact",
            description: "Contact Page"
        },
    ];



    return (
        <header className="container-fluid">
            <div className="row">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

                    <h1 className="p-2 text-white">JEFFREY ANDERSON-LESTER</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="Profile">About Me</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="../Projects">Projects</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="assets/resume.pdf" target="_blank">My Resume</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="../Contact">Contact Me</NavLink>
                            </li>
                            {navLinks.map((name) => (
                                <li className='nav-item'></li>
                            ))}
                        </ul>

                    </div>
                </nav>
            </div>
        </header>

    );
}

export default Header;