import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Homepage}/>
      <Route path='/hats' component={HatsPage}/>
    </Switch>
  );
}

export default App;
