import Hero from '../../components/hero/Hero';
import HomeCard from './HomeCard';
import './home.css'

const Home =()=>{
    return(
        <>
            <div className='home'>
                <div className="home-left">
                    <Hero/>
                  <div className="home-introduce">  LET ME INTRODUCE MYSELF</div>
                    <HomeCard/>
                </div>
                <div className="home-right">

                </div>
            </div>
        </>
    )
}
export default Home;