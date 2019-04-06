import React, { Component } from "react"

import { Route, Switch, NavLink } from "react-router-dom"

import Register from "./components/Register"

import { NavbarWrapper } from "./styles/navbarStyles"

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <NavbarWrapper>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/jokes'>Jokes</NavLink>
          </NavbarWrapper>
        </header>
        <main>
          <Switch>
            {/* <Route path="/login" component={} /> */}
            <Route path='/register' component={Register} />
            {/* <Route path="/jokes" component={} /> */}
            {/* <Redirect exact from='/' to='/jokes' /> */}
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
