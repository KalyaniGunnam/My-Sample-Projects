import React from 'react'
import { Link } from 'react-router-dom';

import '../../commoncss.css'
import './Register.css'

import Image from '../../components/Image/Image'
import AuthForm from '../../components/AuthForm/AuthForm'
import Button from '../../components/Button/Button'


const Register = () => {
  return (
    <div className="register-page page-outline">
        <Image/>
        <p className="welcome-content">
            Let's help you meet up your tasks
        </p>
        <AuthForm isRegistering={true}/>
        <Button text="Register"/>
        <div className="register">
          Already have an account ? <Link to="/signin">Sign In</Link>
        </div> 
    </div>
  )
}

export default Register
