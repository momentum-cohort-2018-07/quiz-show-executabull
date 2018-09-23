import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class EditQuiz extends Component {
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
      <h1>Edit Quiz</h1>
    )
  }
}

export default EditQuiz