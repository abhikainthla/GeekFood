import React from 'react'
import './ReviewCards.css'
function ReviewCards(props) {
  return (
      <div className='container'>
        <p>{props.description}</p>
        <span className='author-text'>{props.author}</span>
    </div>
  )
}

export default ReviewCards;
