import React from 'react'
import './StarRating.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({rating}) => {
    const maxStarCount = 5;
    const roundedRating = Math.round(rating * 2)/2;
    const stars = Array.from({length: maxStarCount}, (_,index) => {
        const starValue = index + 0.5;
        return (
            <span
              key={index}
              className={`star ${starValue <= roundedRating ? 'filled' : ''}`}
            >
              &#9733; 
            </span>
          );
    })
  return (
    <div className="star-rating">{stars}</div>
  )
}

export default StarRating
