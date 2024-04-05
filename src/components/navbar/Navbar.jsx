import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [manu,setManu]=useState("main");


  return (
    <>
      <div className="navbar">
        <div className="nav-icon">BAY</div>
        <div className="nav-manu">
          <ul className="nav-list">
            <li onClick={()=>{setManu("Home")}} ><Link to="./Home">Home</Link>{manu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("About")}}><Link to="./About">About</Link>{manu==="About"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("Projects")}}><Link to="./Projects">Projects</Link>{manu==="Projects"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("Resume")}}><Link to='./Resume'>Resume</Link>{manu==="Resume"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("Blogs")}}><Link to='./Blogs'>Blogs</Link>{manu==="Blogs"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("Man")}}><Link to='./man'>Man</Link>{manu==="Man"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("Women")}}><Link to='./women'>Women</Link>{manu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setManu("Child")}}><Link to='./child'>child</Link>{manu==="Child"?<hr/>:<></>}</li>
            
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
