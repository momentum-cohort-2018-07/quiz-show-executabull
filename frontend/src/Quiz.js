import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class Quiz extends Component {
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
      <h1>Quiz</h1>
    )
  }
}

export default Quiz