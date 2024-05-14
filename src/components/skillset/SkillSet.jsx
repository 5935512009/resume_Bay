import React from "react";
import "./skillset.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiXampp } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";
import { FaUbuntu } from "react-icons/fa";
import { SiMacos } from "react-icons/si";
import { FaWindows } from "react-icons/fa6";
import { SiGnubash } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
function SkillSet() {
  return (
    <div>
      <div className="skillset">
        <u>SKILL SET</u> <br />
        front-end
        <br />
        <div className="skillset-sub">
          Html <FaHtml5 size={40} />
          CSS <FaCss3Alt size={40} />
          Javascript <IoLogoJavascript size={40} />
        </div>
        <div className="skillset-sub">
          ReactJS <FaReact size={40} />
          VueJS <FaVuejs size={40} />
        </div>
        <div className="skillset-sub">
          TailwindCSS <SiTailwindcss size={40} />
          Bootstrap5 <FaBootstrap size={40} />
        </div>
        back-end
        <br />
        <div className="skillset-sub">
          PHP <FaPhp size={40} />
          Bash script <SiGnubash size={40} />
          Node + Express <FaNode size={40} />
        </div>
        server
        <br />
        <div className="skillset-sub">
          SQLserver <SiMysql size={40} />
          Firebase <IoLogoFirebase size={40} />
          MongoDB
          <SiMongodb size={40} />
        </div>
        Tools I use
        <br />
        <div className="skillset-sub">
          VSCODE <TbBrandVscode size={40} />
          XAMPP <SiXampp size={40} />
          Vercel <IoLogoVercel size={40} />
          Postman <SiPostman size={40}/>
        </div>
        <div className="skillset-sub">
          Ubuntu-linux-server <FaUbuntu size={40} />
          MacOS <SiMacos size={40} />
          Window <FaWindows size={40} />
          Github <FaGithub size={40} />
        </div>
        <br />
      </div>
    </div>
  );
}

export default SkillSet;
