import React from 'react';



function Nav() {

    return (
        <header class="container-fluid">
            <div class="row">
                <h1>JEFFREY ANDERSON-LESTER</h1>
                <nav class="navbar navbar-dark bg-primary">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#profile">About Me</a>
                            <a class="nav-link" href="#projects">Projects</a>
                            <a class="nav-link" href="assets/img/resume.pdf" target="_blank">My Resume</a>
                            <a class="nav-link" href="#contact">Contact Me</a>


                        </div>
                    </div>

                </nav>
            </div>

        </header>
    );
}

export default Nav;