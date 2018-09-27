import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'
import { Radio, Control } from 'bloomer'
import data from './data'

class TakeQuiz extends Component {
  constructor () {
    super()
    this.state = {
      quiz: [],
      selectedAnswers: [],
      score: []
    }
    this.startQuiz = this.startQuiz.bind(this)
  }

  componentDidMount () {
    this.startQuiz()
  }

  startQuiz () {
    const { currentUser, quizId } = this.props
    if (currentUser && currentUser.token) {
      data.setUserToken(currentUser.token)
      data.getQuiz(quizId).then(quiz => {
        this.setState(state => ({quiz}))
      }
      )
    }
  }

  handleChange (event) {
    let selectedAnswers = this.state.selectedAnswers
    console.log(event.target.name, 'name', event.target.value, 'value')
    this.setState({
      selectedAnswers:
      selectedAnswers.concat((event.target.value))
    })
  }

  handleSubmit (quiz, answers) {
    const returnedAnswers = this.state.selectedAnswers
    console.log(Object.values(answers), this.state.quiz.id)
    data.scoreQuiz(quiz, returnedAnswers).then(res => this.setState({ score: res }))
  }

  render () {
    let { quiz } = this.state
    let { currentUser } = this.props
    console.log(this.state.selectedAnswers, 'selectedAnswers')
    if (quiz.length !== 0) {
      return (
        <div>
          {this.state.score.length !== 0
            ? <div>
              <div>You scored {this.state.score} out of {Object.values(this.state.selectedAnswers).length}</div>
            </div>
            : <div>
              <section className='sidebar'>
                <div className='sidebar-container'>
                  <h3 className='greeting'>Welcome, {currentUser.name}!</h3>
                  <div><Link to='/pastscores' className='past-scores' onClick={this.renderPastScores}>Past Scores</Link></div>
                  <div><Link to='/' className='quizzes'>Quizzes</Link></div>
                  <div><button className='button logout-button' onClick={this.props.logout} >Log Out</button></div>
                </div>
              </section>
              <section className='main-container'>
                <h1 className='dashboard-title'>Quizzes</h1>
                <form className='taking-quiz-display'>
                  <div className='taking-quiz-title'>{quiz.title}</div>
                  <div className='questions-div control'>
                    {quiz.questions.map((questions, i) => (
                      <div key={quiz.questions[i].answers[i].id}>
                        <div className='question'><strong>{quiz.questions[i].q_text}</strong></div>
                        {quiz.questions[i].answers.map((answer) => (
                          <Control className='control answer' key={answer.id}>

                            <Radio className='answer-input' name={quiz.questions.id} type='radio' value={answer.id} onChange={(e) => this.handleChange(e)} />
                            <label htmlFor={answer.id}>{answer.a_text}</label>
                          </Control>
                        ))}
                      </div>
                    ))}
                  </div>
                  <button className='score-quiz' type='submit' onClick={() => this.handleSubmit(this.state.quiz.id, this.state.selectedAnswers)}>Score Quiz!</button>
                </form>
              </section>
            </div>
          }
        </div>
      )
    } else {
      return (
        <div> no questions </div>
      )
    }
  }
}

export default TakeQuiz
