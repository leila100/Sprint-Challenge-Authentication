import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import { Route, Switch, Redirect, NavLink } from "react-router-dom"

import Register from "./components/Register"
import Login from "./components/Login"
import Jokes from "./components/Jokes"

import { NavbarWrapper, NavIcon } from "./styles/navbarStyles"

class App extends Component {
  logoutHandler = event => {
    event.preventDefault()
    localStorage.removeItem("jwt")
    localStorage.removeItem("username")
    this.props.history.push("/login")
  }

  render() {
    const token = localStorage.getItem("jwt")
    const username = localStorage.getItem("username")
    return (
      <div className='App'>
        <header className='App-header'>
          <NavbarWrapper>
            <NavIcon>
              <i className='far fa-grin-squint' />
            </NavIcon>
            {token ? (
              <>
                <p>Welcome {username}</p>
                <button onClick={this.logoutHandler}>Logout</button>
                <NavLink to='/jokes'>Jokes</NavLink>
              </>
            ) : (
              <>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
              </>
            )}
          </NavbarWrapper>
        </header>
        <main>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/jokes' component={Jokes} />
            <Redirect exact from='/' to='/jokes' />
          </Switch>
        </main>
      </div>
    )
  }
}

export default withRouter(App)
