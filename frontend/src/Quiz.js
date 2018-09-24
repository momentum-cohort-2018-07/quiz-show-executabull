import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'

class Quiz extends Component {
  render () {
    let {quiz} = this.props
    return (
      <div className='quiz-overview'>
        <NavLink to='/quizzes/`${id}`'>
          <div key={quiz.id} className='quiz-title has-text-weight-bold'>{quiz.title}</div>
          <div className='question-count'>{quiz.numberofquestions}</div>
        </NavLink>
      </div>
    )
  }
}

export default Quiz
