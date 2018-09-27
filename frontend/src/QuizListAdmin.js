import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'

class QuizListAdmin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: true
    }
    this.handleClick = this.handleClick.bind(this)
    // this.renderTakeQuiz = this.renderTakeQuiz.bind(this)
  }

  handleClick () {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render () {
    let { unpubQuizzes } = this.props
    return (
      <div>
        {this.state.expanded
          ? (<div>
            <button className='button unpublished-title' onClick={this.handleClick}> &#x25BC; Unpublished Quizzes</button>
            <div>{unpubQuizzes.map((quiz) =>
              <div key={quiz.quiz_id} className='overview-container' onClick={() => this.props.selectQuiz(quiz.quiz_id)}>
                <Link to={`/quiz/${quiz.quiz_id}`}>
                  <div className='quiz-title has-text-weight-bold'>{quiz.quiz_title}</div>
                  <div className='question-count'>{quiz.q_num} Questions</div>
                </Link> <button className='edit-quiz'>Edit Quiz</button></div>
            )}</div>
            <div className='published-title'>Published Quizzes</div>
          </div>)
          : (<div>
            <button className='button unpublished-title' onClick={this.handleClick}> &#x25B6; Unpublished Quizzes</button>
            <div className='published-title'>Published Quizzes</div>
          </div>
          )}
      </div>
    )
  }
}

export default QuizListAdmin
