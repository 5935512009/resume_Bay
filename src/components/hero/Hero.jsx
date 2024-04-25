import React from 'react'
import './hero.css'
import FindMe from '../findme/FindMe'
import { FaHandsClapping } from "react-icons/fa6";
import glass_man_removebg from '../../Assets/glass_man_removebg.png'
export default function Hero() {
  return (<>
    <div className='hero'>
        <div className='hero-left'>
            <h2>Hi there <span className='hero-left-icon'> <FaHandsClapping /></span></h2> 

            <h2>my name is <span className='hero-left-name'> Pasut Srijaroen</span></h2>
        </div>
        <div className='hero-right'>
              <img src={glass_man_removebg} alt="hero right not work" />
        </div>
    </div>
    <div className="introduce">
      let me introduct myself
    </div>
    <div className="findme">
      <FindMe/>
    </div>
 </> 
 )
}
