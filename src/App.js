import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RecipesPage from './pages/RecipesPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsonUsers from "./data/users";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      activeUser: null,
      allUsers: jsonUsers
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    
  }

  handleLogin(user) {
    this.setState({
      avtiveUser: user
    });
  }

  handleLogout() {
    this.setState({
      avtiveUser: null
    });
  }

 render(){
   const { activeUser, allUsers } = this.state;

  return (
    <Switch>
      <Route exact path="/">
        <HomePage activeUser = {activeUser}/>
      </Route>
      <Route exact path="/login">
        <LoginPage allUsers={allUsers} handleLogin={this.handleLogin}/>
      </Route>
      <Route exact path="/recipes">
        <RecipesPage/>
      </Route>

    </Switch>
  );
 }
}

export default App;
