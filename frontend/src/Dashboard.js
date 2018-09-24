import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'
import data from './data'
import Quiz from './Quiz'
import PastScores from './PastScores'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      quizzes: []
    }
  }

  componentDidMount () {
    const {currentUser} = this.props
    if (currentUser && currentUser.token) {
      data.setUserToken(currentUser.token)
      data.getQuizzes().then(quizzes => {
        this.setState(state => ({quizzes}))
      })
    }
  }

  renderPastScores () {
    const {quiz, currentUser} = this.props
    return (
      <div>
        <section className='sidebar'>
          <div className='sidebar-container'>
            {/* <h3>Welcome!</h3> */}
            <h3>Welcome, {currentUser.username}!</h3>
            <div><NavLink to='/' className='quizzes-home'>Quizzes</NavLink></div>
            <div><button className='button logout-button' onClick={this.props.logout} >Log Out</button></div>
          </div>
        </section>
        <section className='main-container'>
          <h1 className='past-scores-title'>Past Scores</h1>
          <div className='past-scores-display'>
            {this.props.scores.map((score, quizId) =>
              <PastScores currentUser={currentUser} setcurrentUser={this.setCurrentUser} quiz={quiz} />
            )}
          </div>
        </section>
      </div>
    )
  }

  render () {
    const { currentUser } = this.props
    return (
      <div>
        <section className='sidebar'>
          <div className='sidebar-container'>
            {/* <h3>Welcome!</h3> */}
            <h3>Welcome, {currentUser.username}!</h3>
            <div><NavLink to='/pastscores' className='past-scores' onClick={this.renderPastScores}>Past Scores</NavLink></div>
            <div><button className='button logout-button' onClick={this.props.logout} >Log Out</button></div>
          </div>
        </section>
        <section className='main-container'>
          <h1 className='dashboard-title'>Quizzes</h1>
          <div className='quizzes-display'>
            {this.state.quizzes.map((quiz) =>
              <Quiz key={quiz.id} quiz={quiz} />
            )}
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
