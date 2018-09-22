import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'bulma/css/bulma.css'

class Results extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      errorMsg: null
    }
  }

  render () {
    return (
      <h1>Results</h1>
    )
  }
}

export default Results