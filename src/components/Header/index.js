import React from 'react';
import {
    HashRouter, Route, Switch,
} from "react-router-dom";

import Nav from '../Nav';
import Profile from '../Profile';
import Projects from '../Projects';
import Resume from '../Resume';
import Contact from '../Contact';


function Header() {

    return (

        <header className="container-fluid">

            <div className="row">

                <HashRouter>

                    <Nav />

                    <Switch>

                        <Route exact path="/" component={Profile} />

                        <Route exact path="/projects" component={Projects} />

                        <Route exact path="/profile" component={Profile} />

                        <Route path="/resume" component={Resume} />

                        <Route path="/contact" component={Contact} />

                    </Switch>
                </HashRouter>


            </div >

        </header >


    )
};



export default Header;