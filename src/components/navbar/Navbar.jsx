import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Im_bay from '../../Assets/Im_bay.jpg'
const Navbar = () => {
  const [manu,setManu]=useState("Home");


  return (
    <>
      <div className="navbar">
        <div className="nav-icon"><Link to="./" onClick={()=>{setManu("Home")}}><img src={Im_bay} alt="Nav img error" /></Link></div>
        <div className="nav-menu">
          <ul className="nav-list">
            <li onClick={()=>{setManu("Home")}} ><Link to="./Home">Home{manu==="Home"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setManu("About")}}><Link to="./About">About{manu==="About"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setManu("Projects")}}><Link to="./Projects">Projects{manu==="Projects"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setManu("Resume")}}><Link to='./Resume'>Resume{manu==="Resume"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setManu("Blogs")}}><Link to='./Blogs'>Blogs{manu==="Blogs"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setManu("Man")}}><Link to='./man'>Man{manu==="Man"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setManu("Women")}}><Link to='./women'>Women{manu==="Women"?<hr/>:<></>}</Link></li>
            <li onClick={()=>{setManu("Child")}}><Link to='./child'>child{manu==="Child"?<hr/>:<></>}</Link></li>
            
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
