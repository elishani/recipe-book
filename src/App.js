import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import RecipesPage from './Pages/RecipesPage'

class App extends React.Component {

 render(){
  return (
    <Switch>
      <Route exect path="/">
        <HomePage/>
      </Route>
      <Route exect path="/login">
        <LoginPage/>
      </Route>
      <Route exect path="/recipes">
        <RecipesPage/>
      </Route>

    </Switch>
  );
 }
}

export default App;
