import React from 'react';
import bootstrap from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Profile from './components/Profile';
import FullStack from './components/FullStack'


function App() {
  return (
    <div>
      <Nav></Nav>
      <Profile></Profile>
      <FullStack></FullStack>
      <main>
      </main>
    </div>
  );
}

export default App;
