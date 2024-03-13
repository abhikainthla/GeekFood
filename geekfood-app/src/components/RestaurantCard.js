import React from 'react'
import './RestaurantCard.css'
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaPhoneAlt } from "react-icons/fa";
function RestaurantCard(props) {
    
      
  return (
    <div>
        <div className='card'>
            <div className='card-header'>
            <h2>{props.name}</h2>
            <hr/>
            <p className='location'><FaLocationDot /> {props.location}</p>
            <p className='rating'>Rating: {props.rating} <FaStar style={{color:"yellow"}} /></p>
            </div> 
            <div className='card-footer'>
            <h3><GiForkKnifeSpoon />  {props.cuisine}</h3>
            <p className='phone'><FaPhoneAlt />  {props.phone}</p>   
            </div>
            
        </div>
    </div>
  )
}

export default RestaurantCard