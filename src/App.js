import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import { HashRouter, Route, Link } from "react-router-dom";


//styling
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'



function App() {


  return (
    <div>

      <Header />


      <Footer />
    </div>

  );
}

export default App;
