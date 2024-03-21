import React from 'react'
import './Image.css'

import landingimage from '../../images/Landing.jpeg'

const Image = () => {
  return (
    <div className="landing-image">
      <img src={landingimage} alt="landing" />
    </div>
  )
}

export default Image
