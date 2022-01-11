import React from 'react';
import { NavLink } from 'react-router-dom'



function Nav() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

            <h1 className="p-2 text-white">JEFFREY ANDERSON-LESTER</h1>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>               <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="Profile">About</NavLink>
                    </li>                         <li className="nav-item">                            <NavLink className="nav-link" to="../Projects">Projects</NavLink>                         </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="../Resume">My Resume</NavLink>
                    </li>                         <li className="nav-item">
                        <NavLink className="nav-link" to="../Contact">Contact Me</NavLink>                         </li>

                </ul>

            </div>
        </nav>


    );
}

export default Nav;