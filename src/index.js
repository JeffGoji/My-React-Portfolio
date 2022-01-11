import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

//Styling:
import './index.css';
import App from './App';
import Background from './components/Background';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <HashRouter>

    <App />
    <Background />

  </HashRouter>,


  document.getElementById('root')
);


reportWebVitals();
