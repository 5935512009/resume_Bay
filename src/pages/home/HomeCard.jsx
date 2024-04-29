import React from 'react'
import './homeCard.css'
import online_games_concept from '../../Assets/online_games_concept.jpg'
export default function HomeCard() {
  return (
    <div className='homecard'>
      <div className="homecard-left">
      I like to create website with computer language .
        I start with HTML CSS and JavaScript . 
        I every interest's are building new Web Technologies and Products . 
        Whenever possible, I also apply my passion for developing products with Node.js 
        and Modern Javascript Library and Frameworks  like React.js and Next.js 
        </div>
      <div className="homecard-right">
        <img src={online_games_concept} alt="images is homecard" />
      </div>
        
    </div>
  )
}
 