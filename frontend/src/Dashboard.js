import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'bulma/css/bulma.css'

class Dashboard extends Component {
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
      <h1>Dashboard</h1>
    )
  }
}

export default Dashboard
