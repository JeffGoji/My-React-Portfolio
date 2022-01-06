import React from 'react';
import { Link } from 'react-router-dom'



function Nav() {

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
        <div class="container-fluid">
            <div class="row">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

                    <h1 className="p-2 text-white">JEFFREY ANDERSON-LESTER</h1>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" Link="#profile">About Me</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" Link="#projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" Link="assets/img/resume.pdf" target="_blank">My Resume</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" Link="#contact">Contact Me</Link>
                            </li>
                            {navLinks.map((name) => (
                                <li className='nav-item'></li>
                            ))}
                        </ul>

                    </div>
                </nav>
            </div>

        </div >



        /* <nav class="navbar navbar-dark bg-primary">
                        <a class="navbar-brand"Link="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page"Link="#profile">About Me</a>
                                <a class="nav-link"Link="#projects">Projects</a>
                                <a class="nav-link"Link="assets/img/resume.pdf" target="_blank">My Resume</a>
                                <a class="nav-link"Link="#contact">Contact Me</a>
    
    
                            </div>
                        </div>
    
                    </nav> */


    );
}

export default Nav;