import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'
import data from './data'
import QuizList from './QuizList'
import PastScores from './PastScores'
import TakeQuiz from './TakeQuiz'
import QuizListAdmin from './QuizListAdmin'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      admin: '',
      pubQuizzes: [],
      unpubQuizzes: [],
      expanded: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    const {currentUser} = this.props
    if (currentUser && currentUser.token) {
      data.setUserToken(currentUser.token)
      data.getQuizzes().then(quizzes => {
        this.setState(state => ({
          pubQuizzes: quizzes.filter(quiz => quiz.published),
          unpubQuizzes: quizzes.filter(quiz => !quiz.published)
        }))
      })
    }
  }

  handleClick () {
    this.setState(state => ({ expanded: !state.expanded }))
  // console.log(this.state.expand)
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
            {this.props.scores.map((score, quizId) =>
              <PastScores currentUser={currentUser} setcurrentUser={this.setCurrentUser} quiz={quiz} />
            )}
          </div>
        </section>
      </div>
    )
  }

  renderTakeQuiz () {
    const { quiz, currentUser } = this.props
    console.log(quiz.id)
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
          <h1 className='take-quiz-title'>{quiz.title}</h1>
          <div className='take-quiz-display'>
            {quiz.map((quizId) =>
              <TakeQuiz key={quiz.id} currentUser={currentUser} setcurrentUser={this.setCurrentUser} quiz={quiz} takeQuiz={this.renderTakeQuiz} />
            )}
          </div>
        </section>
      </div>

    )
  }

  render () {
    const { currentUser } = this.props
    // if (this.state.unpubQuizzes === ) {
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
                this.state.expanded
                ? (<div>
                  <button className='button unpublished-title' onClick={this.handleClick}> &#x25BC; Unpublished Quizzes</button>
                  <div>{this.state.unpubQuizzes.map((quiz) =>
                    <QuizListAdmin key={quiz.id} quiz={quiz} />) }
                  </div>
                  <div className='published-title'>Published Quizzes</div>
                </div>)
                : (<div>
                  <button className='button unpublished-title' onClick={this.handleClick}> &#x25B6; Unpublished Quizzes</button>
                  <div className='published-title'>Published Quizzes</div>
                </div>
                )}
              <div>
                <div>
                  {this.state.pubQuizzes.map((quiz) =>
                    <QuizList key={quiz.id} quiz={quiz} />
                  ) }
                </div>
              </div>

            </div>
          </section>
        </div>
      )
    // } else if (!this.state.unpubQuizzes) {
    //   return (
    //     <div>
    //       <section className='sidebar'>
    //         <div className='sidebar-container'>
    //           <h3 className='greeting'>Welcome, {currentUser.name}!</h3>
    //           <div><NavLink to='/pastscores' className='past-scores' onClick={this.renderPastScores}>Past Scores</NavLink></div>
    //           <div><button className='button logout-button' onClick={this.props.logout} >Log Out</button></div>
    //         </div>
    //       </section>
    //       <section className='main-container'>
    //         <h1 className='dashboard-title'>Quizzes</h1>
    //         <div className='quizzes-display'>

    //           <div>
    //             <div>
    //               {this.state.pubQuizzes.map((quiz) =>
    //                 <QuizList key={quiz.id} quiz={quiz} />
    //               ) }
    //             </div>
    //           </div>

    //         </div>
    //       </section>
    //     </div>
    //   )
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
