import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop-page';

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
    </Switch>
  );
}

export default App;
