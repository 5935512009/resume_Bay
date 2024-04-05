import React from 'react'
import './footer.css'
export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer-left">
       <h5> Designed and Developed by Pasut Srijaroen </h5>
      </div>
      <div className="footer-right">
        <h5>Copyright © {year} Bay</h5>
      </div>
    </div>
  )
}
