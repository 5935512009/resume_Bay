import HomeCard from './HomeCard';
import './home.css'

const Home =()=>{
    return(
        <>
            <div className='home'>
                <div className="home-left">
                    LET ME INTRODUCE MYSELF
                    <HomeCard/>
                </div>
                <div className="home-right">

                </div>
            </div>
            <div className="home-buttom">
                FIND ME ON
                <p>Feel free to connect with me</p>
            </div>
        </>
    )
}
export default Home;