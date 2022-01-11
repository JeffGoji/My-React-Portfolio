import React from 'react';
import { Route } from 'react-router-dom';

import Nav from '../Nav';
import Profile from '../Profile';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact';



//React router dom componnent:


function Header() {

    return (
        <header className="container-fluid">

            <div className="row">
                <Nav />

                <Route exact path="/">
                    <Profile />
                </Route>

                <Route path="/projects">
                    <Projects />
                </Route>

                <Route path="/profile">
                    <Profile />
                </Route>

                <Route path="/resume">
                    <Resume />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

            </div >

        </header>
    )
};




export default Header;