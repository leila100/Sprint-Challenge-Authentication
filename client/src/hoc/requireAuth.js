import React from "react"
import axios from "axios"

import { Message } from "../styles/messageStyles"

axios.defaults.baseURL = "http://localhost:8080/api"

axios.interceptors.request.use(
  options => {
    options.headers.authorization = localStorage.getItem("jwt")
    return options
  },
  error => {
    return Promise.reject(error)
  }
)

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("jwt")
      const notLoggedIn = <Message>Please login to access page.</Message>
      return <>{token ? <Component {...this.pros} /> : notLoggedIn}</>
    }
  }
}
