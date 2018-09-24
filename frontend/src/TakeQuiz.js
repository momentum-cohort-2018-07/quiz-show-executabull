import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class TakeQuiz extends Component {
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
      <h1>Take Quiz</h1>
    )
  }
}

export default TakeQuiz