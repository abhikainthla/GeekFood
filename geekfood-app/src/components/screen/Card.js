import './Card.css'
import React from 'react';
export const Card = (props) => {
  return (
    <div className="card">
        <div className="card-text">
            <p>{props.description}</p>
        </div>
        <div className="card-author">
            <div>
            <img className="card-img" src ="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"></img>
            </div>
            <div>
            <h4>Gladis Lennon</h4>
            <p>Head of SEO</p>
            </div>
        </div>
    </div>
  )
}
