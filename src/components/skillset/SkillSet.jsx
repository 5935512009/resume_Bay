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
          html <FaHtml5 />
          css <FaCss3Alt />
          javascript <IoLogoJavascript />
        </div>
        <div className="skillset-sub">
          reactJS <FaReact />
          vueJS <FaVuejs />
        </div>
        <div className="skillset-sub">
          TailwindCSS <SiTailwindcss />
          Bootstrap5 <FaBootstrap />
        </div>
        back-end
        <br />
        <div className="skillset-sub">
          PHP <FaPhp />
          node <FaNode />
          express
        </div>
        server
        <br />
        <div className="skillset-sub">
          SQLserver <SiMysql />
          firebase <IoLogoFirebase />
          MongoDB
          <SiMongodb />
        </div>
        <br />
        Tools I use
        <br />
        <div className="skillset-sub">
          VSCODE <TbBrandVscode />
          XAMPP <SiXampp />
          vercel <IoLogoVercel />
        </div>
        <div className="skillset-sub">
          ubuntu-linux-server <FaUbuntu />
          MacOS <SiMacos />
          window <FaWindows />
        </div>
        <br />
      </div>
    </div>
  );
}

export default SkillSet;
