import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class PastScores extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     errorMsg: null
  //   }
  // }

  render () {
    let { quiz } = this.props
    return (
      <div className='past-scores-div'>
        <div> {quiz.scores}</div>
      </div>

    )
  }
}

export default PastScores
