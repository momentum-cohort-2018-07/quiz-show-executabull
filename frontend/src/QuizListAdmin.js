import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'

class QuizListAdmin extends Component {
  render () {
    let { quiz } = this.props
    return (
      <div key={quiz.id} className='overview-container'> <NavLink to='/quizzes/{id}'>
        <div className='quiz-title has-text-weight-bold'>{quiz.title}</div>
        <div className='question-count'>{quiz.qnum}</div>
      </NavLink> <button className='edit-quiz'>Edit Quiz</button></div>
    )
  }
}

export default QuizListAdmin
