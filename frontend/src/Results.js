import React, { Component } from 'react'
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