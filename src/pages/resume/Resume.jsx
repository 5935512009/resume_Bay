import React from 'react';
import './resume.css';
import { BsDot } from "react-icons/bs";
const Resume = () => {
  return (
    <div className="resume">
      <div className="header">
        <h1>NAME : PASUT SRIJAROEN</h1>
        <p>email: Pasut2541@hotmail.com | Phone: 098-0130427</p>
      </div>
      <div className="experience">
        <h1>Education</h1>
        <ul>
          <li>
            <h3>Computer Engineering</h3>
            <h5>Prince of Songkhla University</h5>
            <p><BsDot /> Bachelor's Degree in Computer Engineering</p>
            <p><BsDot /> Software developer</p>
            <span className="date">2017 - 2021</span>
          </li>
          <li>
            <h3>Student</h3>
            <h5>Nuaklongprachabumrung school</h5>
            <p><BsDot /> math-science</p>
            <span className="date">2014 - 2016</span>
          </li>
          
        </ul>
      </div>
      <div className="experience">
        <h1>Job experience</h1>
        <ul>
          <li>
            <h3>Network Engineer</h3>
            <h5>organization : triple T boardband</h5>
            <p><BsDot /> บรรยายเกี่ยวกับประสบการณ์ทำงาน 1</p>
            <span className="date">เดือน/ปี เริ่มต้น - เดือน/ปี สิ้นสุด</span>
          </li>
          
          <li>
            <h3>Apprentice</h3>
            <h5>organization : NT (CAT Phuket) Office</h5>
            <p><BsDot /> roubleshoot(Config IP-Phone, broadbandInternet)</p>
            <span className="date">May 2021 - July 2021</span>
          </li>
          <li>
            <h3>Military status</h3>
            <h5><BsDot /> Completed </h5>
            <span className="date">2022</span>
          </li>
        </ul>
      </div>
      
      {/* เพิ่มส่วนของการศึกษา ทักษะ หรือส่วนอื่นๆ ตามต้องการ */}
    </div>
  );
}

export default Resume;
