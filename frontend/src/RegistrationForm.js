import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'bulma/css/bulma.css'

class RegistrationForm extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      name: '',
      errorMsg: null
    }
  }

  render () {
    return (
      <form className='register-form'>
        <h2 id='register-title'>Register</h2>
        <label className='label name'>Name</label>
        <div className='control'>
          <input type='text' className='input name' required />
        </div>
        <label className='label username'>Username</label>
        <div className='control'>
          <input type='text' className='input username' required />
        </div>
        <label className='label password'>Password</label>
        <div className='control'>
          <input type='password' className='input password' required />
        </div>
        <label className='label confirm-password'>Confirm Password</label>
        <div className='control'>
          <input type='password' className='input confirm-password' required />
        </div>
        <button type='submit' className='button is-primary register-button'>Register</button>
      </form>
    )
  }
}

export default RegistrationForm
