import React from "react";
import "./aboutCard.css";
import { ImPointRight } from "react-icons/im";
import im_Bay_in_work from '../../Assets/me/im_Bay_in_work.jpg'
export default function AboutCard() {
  return (
    <div className="aboutCard">
      <div className="aboutCard-left">
      <img src={im_Bay_in_work} alt="asdasdasd" />
      <p>
        Hi Everyone, I am
        <span className="aboutCard-name"> Pasut Srijaroen</span>
        <br />
        from <span className="aboutCard-name">Krabi, Thailand</span>
        <br />
        I am currently employed as a<span className="aboutCard-name"> Network and software engineer</span> at <span className="aboutCard-name">TRIPLE T BROADBAND</span>.
        <br />
        I have completed Integrated Software engineer in <span className="aboutCard-name"> computer engineer(COE) </span>
        at <span className="aboutCard-name"> Prince of Songkla University,Phuket campus.</span>
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>
      <ul>
        <li>
          <ImPointRight /> Playing Games
        </li>
        <li>
          <ImPointRight /> Read Manga
        </li>
        <li>
          <ImPointRight /> Travelling
        </li>
      </ul>
      </div>
      <div className="aboutCard-right">
          
      </div>
    </div>
  );
}
