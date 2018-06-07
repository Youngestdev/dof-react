import React from 'react'
// import { Route, Link, MemoryRouter, Router } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Components/Home/home'
import Login from './Components/Auth/Login'
import Register from './Components/Auth/Registration'
import ngoDashboard from './Components/Dashboard/ngo/index'


class App extends React.Component {

  render() {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/dashboard" component={ngoDashboard}/>
        </div>
      </Router>
    );
  }
}

export default App