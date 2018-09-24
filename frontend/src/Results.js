import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import data from './data'

class Results extends Component {
  // componentDidMount () {
  //   const { currentUser, quizScores } = this.props
  //   if (currentUser && currentUser.token) {
  //     data.getResults().then(quizzes => this.setState(state => ({quizzes: quizzes})))
  //   }
  //   console.log(this.state.quizzes)
  // }

  render () {
    return (
      <div className='results-div'>
        <h1>Results</h1>
      </div>
    )
  }
}

export default Results
