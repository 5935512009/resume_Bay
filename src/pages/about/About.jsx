import AboutCard from './AboutCard';
import './about.css';

const About =()=>{
    return(
        <div className="about">
            <div className="about-left">
                <h2>
                    Know Who <span className='about-left-name'>I'm</span><br/>
                </h2>
                <h2>
                    <AboutCard/>
                </h2>
            </div>
            <div className="about-right">
                <h2>about left space use justify context so long time to see huhu
                    haha</h2>
            </div>
        </div>
    )
}

export default About;