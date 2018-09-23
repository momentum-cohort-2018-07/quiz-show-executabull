import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class PastScores extends Component {
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
      <h1>PastScores</h1>
    )
  }
}

export default PastScores