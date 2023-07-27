import React from 'react'
import './signup.css'
import Navigation from '../../components/navigation/Navigation'

const Signup = () => {
  return (
    <div className='signup'>
        <Navigation/>
        <div className="signup__form">
            <h1 className='signup__form__title'>Signup</h1>
            <input className='signup__form__input' type="text" placeholder='Email' />
            <input className='signup__form__input' type="text" placeholder='Password'/>
            <button className='signup__form__button' >Create Account</button>
            <p className='signup__form__signup'>Already have an account? Login</p>
        </div>
    </div>
  )
}

export default Signup