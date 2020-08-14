import React from 'react';
import "./style/App.scss";
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Details from './components/Details';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/details/:bookId' component={Details}/>
      <Route exact path='/favorites' component={Favorites}/>
    </div>
  );
}

export default App;
