import React from 'react'
import './login.css'
import Navigation from '../../components/navigation/Navigation'

const Login = () => {
  return (
    <div className='login'>
        <Navigation/>
        <div className="login__form">
            <h1 className='login__form__title'>Login</h1>
            <input className='login__form__input' type="text" placeholder='Email' />
            <input className='login__form__input' type="text" placeholder='Password'/>
            <button className='login__form__button' >Login</button>
            <p className='login__form__signup'>Create an account</p>
            <p className='login__form__reset'>Forgot your password?</p>
        </div>
    </div>
  )
}

export default Login