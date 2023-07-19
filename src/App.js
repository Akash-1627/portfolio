import logo from './logo.svg';
import './App.css';
import './scrollBar.css';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import About from './component/About/About';
import Resume from './component/Resume/Resume';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className='main'>
      <Navbar/>
      <Home/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
