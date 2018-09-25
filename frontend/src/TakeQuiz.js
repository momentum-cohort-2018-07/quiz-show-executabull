import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import data from './data'
// import Quiz from './Quiz'

class TakeQuiz extends Component {
  constructor () {
    super()
    this.state = {
      quiz: [],
      published: false
    }
  }

  componentDidUpdate (quiz, id) {
    const {currentUser} = this.props
    if (currentUser && currentUser.token) {
      data.setUserToken(currentUser.token)
      data.getQuiz().then(quiz => {
        this.setState(state => ({quiz}))
      }
      )
    }
  }

  render () {
    let {quiz} = this.props
    console.log(quiz)
    return (
      <div className='question-div'>
        <h1 className='taking-quiz-title'>{quiz.title}</h1>
        <div className='question'>{quiz.question}</div>
        {quiz.answers.map((answer) =>
          <div>{quiz.answer}</div>
        )}
      </div>
    )
  }
}

export default TakeQuiz
