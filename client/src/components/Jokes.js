import React, { Component } from "react"
import axios from "axios"

import requireAuth from "../hoc/requireAuth"

import { JokesWrapper, JokeText } from "../styles/jokeStyles"

class Jokes extends Component {
  state = {
    jokes: [],
    message: ""
  }

  componentDidMount = () => {
    const endpoint = "http://localhost:8080/api/jokes"

    axios
      .get(endpoint)
      .then(response => {
        this.setState({ jokes: response.data })
      })
      .catch(error => {
        let message = "Something went wrong!"
        if (error.response) message = error.response.data.errorMessage
        console.log(message)
        this.setState({ message: message })
      })
  }

  render() {
    return (
      <JokesWrapper>
        <h1>Welcome to Webauth-Sprint-challenge</h1>
        <ul>
          {this.state.jokes.map(joke => {
            return (
              <JokeText key={joke.id}>
                <i className='far fa-grin-squint' />
                <p>{joke.joke}</p>
              </JokeText>
            )
          })}
        </ul>
      </JokesWrapper>
    )
  }
}

export default requireAuth(Jokes)
