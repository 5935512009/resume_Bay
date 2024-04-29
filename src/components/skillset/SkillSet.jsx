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

function SkillSet() {
  return (
    <div>
      SKILL SET <br />
      <div className="skillset">
        front-end
        <br />
        <div className="skillset-sub">
          html <FaHtml5 size={40}/>
          css <FaCss3Alt size={40} />
          javascript <IoLogoJavascript size={40} />
        </div>
        <div className="skillset-sub">
          reactJS <FaReact size={40} />
          vueJS <FaVuejs size={40} />
        </div>
        <div className="skillset-sub">
          TailwindCSS <SiTailwindcss size={40} />
          Bootstrap5 <FaBootstrap size={40} />
        </div>
        back-end
        <br />
        <div className="skillset-sub">
          PHP <FaPhp size={40} />
          node <FaNode  size={40} />
          express
        </div>
        server
        <br />
        <div className="skillset-sub">
          SQLserver <SiMysql size={40} />
          firebase <IoLogoFirebase size={40} />
          MongoDB
          <SiMongodb size={40} />
        </div>
        <br />
        Tools I use
        <br />
        <div className="skillset-sub">
          VSCODE <TbBrandVscode size={40} />
          XAMPP <SiXampp size={40} />
          vercel <IoLogoVercel size={40} />
        </div>
        <div className="skillset-sub">
          ubuntu-linux-server <FaUbuntu  size={40}/>
          MacOS <SiMacos size={40} />
          window <FaWindows size={40} />
        </div>
        <br />
      </div>
    </div>
  );
}

export default SkillSet;
