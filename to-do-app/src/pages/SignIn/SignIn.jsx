import React from 'react'
import { Link } from 'react-router-dom';

import './SignIn.css'

import Image from '../../components/Image/Image'
import AuthForm from '../../components/AuthForm/AuthForm'
import Button from '../../components/Button/Button'

const SignIn = () => {
  return (
    <div className="signin-page page-outline">
      <Image/>
      <p className="welcome-content">
          Welcome back to our remainder
      </p>
      <AuthForm isRegistering={false}/>
      <Link to="/task">
        <Button text="Sign In"/>
      </Link>
      
      <div className="forgort-password">
        <p> Don't have an account ? 
          <span> &nbsp;</span>
          <Link to="/register">
            Sign Up
          </Link>
        </p>
        <p>
          <a href="#/">
            Forgot Password
          </a>
        </p> 
      </div> 
    </div>
  )
}

export default SignIn
