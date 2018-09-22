import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'bulma/css/bulma.css'

class NewQuiz extends Component {
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
      <h1>New Quiz</h1>
    )
  }
}

export default NewQuiz