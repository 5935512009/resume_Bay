import './findme.css'
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const FindMe = ()=>{
    return(<>
        <div className="findme">
          <div className="find-me-text">  Fine me on</div>
        </div>
        <div className="findme-icons">
            <a href="https://github.com/5935512009"><FaGithub size={40} /></a>
          
            <a href="https://www.facebook.com/baytopdom"><FaFacebook size={40} /></a>
            <a href="https://www.linkedin.com/in/pasut-srijaroen-08115320b"><FaLinkedin size={40} /></a>
        </div>
    </>)
}
export default FindMe