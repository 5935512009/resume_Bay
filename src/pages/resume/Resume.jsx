import React from 'react';
import './resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="header">
        <h1>NAME : PASUT SRIJAROEN</h1>
        <p>email: Pasut2541@hotmail.com | Phone: 000-000-0000</p>
      </div>
      <div className="experience">
        <h2>Job experience</h2>
        <ul>
          <li>
            <h3>Network Engineer</h3>
            <h5>organization : triple T boardband</h5>
            <p>บรรยายเกี่ยวกับประสบการณ์ทำงาน 1</p>
            <span className="date">เดือน/ปี เริ่มต้น - เดือน/ปี สิ้นสุด</span>
          </li>
          <li>
            <h3>Apprentice</h3>
            <h5>organization : NT Phuket</h5>
            <p>บรรยายเกี่ยวกับประสบการณ์ทำงาน 1</p>
            <span className="date">เดือน/ปี เริ่มต้น - เดือน/ปี สิ้นสุด</span>
          </li>
          
        </ul>
      </div>
      {/* เพิ่มส่วนของการศึกษา ทักษะ หรือส่วนอื่นๆ ตามต้องการ */}
    </div>
  );
}

export default Resume;
