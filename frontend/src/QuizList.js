import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'

class QuizList extends Component {
  handleClick () {
    this.props.renderTakeQuiz()
    console.log(this.props.quiz)
  }

  render () {
    let { quiz } = this.props
    return (
      <NavLink to='/quizzes/:id' onClick={(e) => this.handleClick}>
        <div className='quiz-overview'>
          <div key={quiz.id} className='quiz-title has-text-weight-bold'>{quiz.title}</div>
          <div className='question-count'>{quiz.qnum}</div>
        </div>
      </NavLink>
    )
  }
}

export default QuizList
