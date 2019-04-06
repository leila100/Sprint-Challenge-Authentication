import React, { Component } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

import { Message } from "../styles/messageStyles"
import { FormWrapper, FormGroup, Button, Footer } from "../styles/formStyles"

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      message: ""
    }
  }

  saveInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  registerHandler = event => {
    event.preventDefault()
    const { username, password } = this.state
    const endpoint = "http://localhost:8080/api/register"
    axios
      .post(endpoint, {
        username,
        password
      })
      .then(response => {
        localStorage.setItem("jwt", response.data.token)
        localStorage.setItem("username", response.data.username)
        this.props.history.push("/jokes")
      })
      .catch(error => {
        let message = "Something went wrong!"
        if (error.response) message = error.response.data.errorMessage
        this.setState({ message: message })
      })
  }

  render() {
    return (
      <FormWrapper>
        <Message error>{this.state.message}</Message>
        <form onSubmit={this.registerHandler}>
          <FormGroup>
            <i className='fas fa-user' />
            <input
              type='text'
              placeholder='Username'
              name='username'
              value={this.state.username}
              onChange={this.saveInput}
              required
            />
          </FormGroup>
          <FormGroup>
            <i className='fas fa-lock' />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={this.state.password}
              onChange={this.saveInput}
              required
            />
          </FormGroup>

          <Button type='submit'>
            <i className='fas fa-user-plus' /> Register
          </Button>
          <Footer>
            Already registered: <Link to='/login'>Login</Link>
          </Footer>
        </form>
      </FormWrapper>
    )
  }
}

export default Register
