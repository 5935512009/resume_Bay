import React from 'react'
import './hero.css'
import { FaHandsClapping } from "react-icons/fa6";
import code_typing_concept_illustration_removebg from '../../Assets/code_typing_concept_illustration_removebg.png'
export default function Hero() {
  return (<>
    <div className='hero'>
        <div className='hero-left'>
            <h2>Hi there <span className='hero-left-icon'> <FaHandsClapping /></span></h2> 

            <h2>my name is <span className='hero-left-name'> Pasut Srijaroen</span></h2>
            <a href="https://drive.google.com/file/d/16c0NnIXChFmg3iywzmsvfCM2RxtSzWwl/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className='hero-left-button'>RESUME</button></a>
        </div>
        <div className='hero-right'>
              <img src={code_typing_concept_illustration_removebg} alt="hero right not work" />
        </div>
    </div>
 </> 
 )
}
