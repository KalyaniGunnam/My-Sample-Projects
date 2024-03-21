import React from 'react'
import { Link } from 'react-router-dom';

import '../../commoncss.css'

import './Landing.css'

import Image from '../../components/Image/Image'
import Welcome from '../../components/Welcome/Welcome'
import Button from '../../components/Button/Button'


const Landing = () => {
  return (
    <div className="landing-page page-outline">
        <Image/>
        <Welcome/>
        <Link to="/register">
          <Button text="Get Started"/> 
        </Link>
    </div>
  )
}

export default Landing
