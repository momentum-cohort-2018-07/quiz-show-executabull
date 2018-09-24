import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class Quiz extends Component {
  render () {
    let {quiz} = this.props
    return (
      <div>
        <div key={quiz.id} className='quiz-title has-text-weight-bold'>{quiz.title}</div>
        <div classname='question-count'>{quiz.numberofquestions}</div>
      </div>
    )
  }
}

export default Quiz
