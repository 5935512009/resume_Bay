import SkillSet from "../../components/skillset/SkillSet";
import AboutCard from "./AboutCard";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <h2>
          Know Who <span className="about-left-name">I'm</span>
          <br />
        </h2>
        <h2>
          <AboutCard />
        </h2>
        <h2>
          <SkillSet/>
        </h2>
      </div>

      <div className="about-right">
        
      </div>
    </div>
  );
};

export default About;
