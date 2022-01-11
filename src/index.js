import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Styling:
import './index.css';
import App from './App';
import Background from './components/Background';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(

  <BrowserRouter>

    <App />
    <Background />

  </BrowserRouter >,
  document.getElementById('root')
);

reportWebVitals();
