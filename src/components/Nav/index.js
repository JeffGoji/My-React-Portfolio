import React from 'react';
import { Link } from 'react-router-dom'



function Nav() {

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                    <h1 className="p-2 text-white">JEFFREY ANDERSON-LESTER</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" Link="#profile">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" Link="#projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" Link="assets/img/resume.pdf" target="_blank">My Resume</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" Link="#contact">Contact Me</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>

        </div >



        /* <nav className="navbar navbar-dark bg-primary">
                        <a className="navbar-brand"Link="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page"Link="#profile">About Me</a>
                                <a className="nav-link"Link="#projects">Projects</a>
                                <a className="nav-link"Link="assets/img/resume.pdf" target="_blank">My Resume</a>
                                <a className="nav-link"Link="#contact">Contact Me</a>
    
    
                            </div>
                        </div>
    
                    </nav> */


    );
}

export default Nav;