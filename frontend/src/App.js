import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'
import './App.css'
import Dashboard from './Dashboard'
import TakeQuiz from './TakeQuiz'
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

    const name = window.localStorage.getItem('name')
    const token = window.localStorage.getItem('token')
    if (name && token) {
      this.state.currentUser = {name, token}
      data.setUserToken(token)
    }

    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logout = this.logout.bind(this)
  }

  setCurrentUser (user) {
    window.localStorage.setItem('name', user.name)
    window.localStorage.setItem('token', user.token)
    this.setState(state => ({ currentUser: user }))
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
              <h1 className='App-title'><strong>QuizzaBull</strong></h1>
            </header>
            <div className='board'>
              {/* <RegistrationForm currentUser={this.state.CurrentUser} setCurrentUser={this.setCurrentUser} /> */}
              {/* <LoginForm currentUser={this.state.CurrentUser} setCurrentUser={this.setCurrentUser} /> */}
              {/* <Dashboard currentUser={this.state.CurrentUser} setcurrentUser={this.setCurrentUser} logout={this.logout} /> */}

              <Route exact path='/' render={() =>
                <Guard condition={currentUser} redirectTo='./login'>
                  <Dashboard currentUser={currentUser} setcurrentUser={this.setCurrentUser} logout={this.logout} />
                </Guard>
              } />

              <Route path='/login' render={() =>
                <Guard condition={!currentUser} redirectTo='/'>
                  <LoginForm currentUser={currentUser} setCurrentUser={this.setCurrentUser} />
                </Guard>
              } />

              <Route path='/register' render={() =>
                <Guard condition={!currentUser} redirectTo='/'>
                  <RegistrationForm currentUser={currentUser} setCurrentUser={this.setCurrentUser} />
                </Guard>
              } />

            </div>
          </div>
        </div>
      </Router>
    )
  }
}

const Guard = ({ redirectTo, condition, children }) => {
  if (condition) {
    return children
  } else {
    return <Redirect to={redirectTo} />
  }
}
// App.propTypes = {
//   currentUser: PropTypes.shape({
//     username: PropTypes.string,
//     token: PropTypes.string
//   }).isRequired,
//   setCurrentUser: PropTypes.func.isRequired,
//   logout: PropTypes.func.isRequired
// }

export default App
