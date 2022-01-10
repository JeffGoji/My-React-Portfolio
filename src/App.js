import React from 'react';

//Import Router:
import { Route } from 'react-router-dom';

import Header from './components/Header'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

//styling
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

function App() {

  return (
    <div>
      <Header />



      <Route exact path="/">
        <Profile />
      </Route>

      <Route path="/projects">
        <Projects />
      </Route>

      <Route path="/profile">
        <Profile />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>


      <Footer />

    </div>
  );
}

export default App;
