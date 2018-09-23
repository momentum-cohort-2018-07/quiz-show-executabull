import React, { Component } from 'react'
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