
import './App.css';
import {
  BrowserRouter, 
  Route,
  Routes
} from "react-router-dom";
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Resume from './pages/resume/Resume';
import Blogs from './pages/Blogs/Blogs';
import ShopCategory from './pages/ShopCategory/ShopCategory';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>   
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/Blogs" element={<Blogs/>}/>
        <Route path="/man" element={<ShopCategory category="man"/>}/>
        <Route path="/women" element={<ShopCategory category="woman"/>}/>
        <Route path="/child" element={<ShopCategory category="child"/>}/>
      </Routes>
      <div className='footer'> <Footer/></div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
