import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import 'bulma/css/bulma.css'
import './App.css'
import Dashboard from './Dashboard'
import Quiz from './Quiz'
import Results from './Results'
import NewQuiz from './NewQuiz'
import EditQuiz from './EditQuiz'
import PastScores from './PastScores'
import LoginForm from './LoginForm.js'
import RegistrationForm from './RegistrationForm'
import data from './data'

class App extends Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }

    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    if (username && token) {
      this.state.currentUser = {username, token}
      data.setUserToken(token)
    }

    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logout = this.logout.bind(this)
  }

  setCurrentUser (user) {
    window.localStorage.setItem('username', user.name)
    window.localStorage.setItem('token', user.token)
    this.setState({ currentUser: user })
  }

  logout () {
    data.setUserToken(null)
    window.localStorage.clear()
    this.setState({
      currentUser: null
    })
  }

  render () {
    const { currentUser } = this.state
    return (
      <Router>
        <div id='root'>
          <div className='App'>
            <header className='App-header'>
              <h1 className='App-title'><strong>Quiz-a-Bull</strong></h1>
            </header>
            <div className='board'>
              {/* <RegistrationForm currentuser={this.setCurrentUser} /> */}
              <LoginForm currentuser={this.setCurrentUser} />
            </div>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
