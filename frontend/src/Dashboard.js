import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'
import data from './data'
import QuizList from './QuizList'
import PastScores from './PastScores'
import QuizListAdmin from './QuizListAdmin'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pubQuizzes: [],
      unpubQuizzes: [],
      selectedQuiz: ''
    }
    // this.renderTakeQuiz = this.renderTakeQuiz.bind(this)
    this.selectQuiz = this.selectQuiz.bind(this)
  }

  componentDidMount () {
    const {currentUser} = this.props
    if (currentUser && currentUser.token) {
      data.setUserToken(currentUser.token)
      data.getQuizzes().then(quizzes => {
        console.log("quizzes", quizzes)
        this.setState(state => ({        
          pubQuizzes: quizzes.filter(quiz => quiz.published),
          unpubQuizzes: quizzes.filter(quiz => !quiz.published)
        }))
      })
    }
  }

  renderPastScores () {
    const {quiz, currentUser} = this.props
    return (
      <div>
        <section className='sidebar'>
          <div className='sidebar-container'>
            <h3>Welcome, {currentUser.name}!</h3>
            <div><NavLink to='/' className='quizzes-home'>Quizzes</NavLink></div>
            <div><button className='button logout-button' onClick={this.props.logout} >Log Out</button></div>
          </div>
        </section>
        <section className='main-container'>
          <h1 className='past-scores-title'>Past Scores</h1>
          <div className='past-scores-display'>
            {this.props.scores.map((score, id) =>
              <PastScores currentUser={currentUser} setcurrentUser={this.setCurrentUser} quiz={quiz} />
            )}
          </div>
        </section>
      </div>
    )
  }

  selectQuiz (quizId) {
    this.setState({
      selectedQuiz: quizId
    })
  }

  render () {
    const { currentUser } = this.props
    // console.log(this.state.unpubQuizzes)
    console.log(this.state.pubQuizzes)
    return (
      <div>
        <section className='sidebar'>
          <div className='sidebar-container'>
            <h3 className='greeting'>Welcome, {currentUser.name}!</h3>
            <div><NavLink to='/pastscores' className='past-scores' onClick={this.renderPastScores}>Past Scores</NavLink></div>
            <div><button className='button logout-button' onClick={this.props.logout} >Log Out</button></div>
          </div>
        </section>
        <section className='main-container'>
          <h1 className='dashboard-title'>Quizzes</h1>
          <div className='quizzes-display'>
            {this.state.unpubQuizzes.length > 0 &&
            <QuizListAdmin currentUser={currentUser} unpubQuizzes={this.state.unpubQuizzes} selectQuiz={this.selectQuiz} selectedQuiz={this.state.selectedQuiz} /> }
            <div>
              {this.state.pubQuizzes.length > 0 &&
              this.state.pubQuizzes.map((quiz) =>
                <QuizList currentUser={currentUser} quiz={quiz} key={quiz.quiz_id} pubQuizzes={this.state.pubQuizzes} id={quiz.quiz_id} selectQuiz={this.selectQuiz} selectedQuiz={this.state.selectedQuiz} />
              ) }
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Dashboard

// Dashboard
// USER if published quiz
// Get:
//   Quiz names
//   Taken?
//     Score
//   Quiz_id
//   Number of questions
// ADMIN
//   Unpublished quiz info
