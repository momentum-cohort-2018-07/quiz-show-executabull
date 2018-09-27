import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'

class QuizList extends Component {
  constructor () {
    super()
    this.state = {
      quiz: []
    }
  }

  render () {
    let { quiz } = this.props
    console.log(this.state.selectedQuiz)
    return (
      <Link to={`quiz/${quiz.quiz_id}`}>
        <div key={quiz.quiz_id} className='quiz-overview' onClick={() => this.props.selectQuiz(quiz.quiz_id)}>
          <div className='quiz-title has-text-weight-bold'>{quiz.quiz_title}</div>
          <div className='question-count'>{quiz.q_num} Questions</div>
        </div>
      </Link>
    )
  }
}

export default QuizList
