import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'bulma/css/bulma.css'

class LoginForm extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      errorMsg: null
    }
  }

  render () {
    return (
      <form className='login-form'>
        <h2 id='login-title'>Log In</h2>
        <label className='label username'>Username</label>
        <div className='control'>
          <input type='text' className='input username' required />
        </div>
        <label className='label password'>Password</label>
        <div className='control'>
          <input type='password' className='input password' required />
        </div>
        <div className='register-info'>
          <span className='register'>Click here to</span>&nbsp;
          <a className='register'>Register</a>
        </div>
        <button type='submit' className='button is-primary login-button'>Sign In</button>
      </form>
    )
  }
}

export default LoginForm
