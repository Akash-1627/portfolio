import React, { useEffect } from 'react';
import './About.css';
// import '../../ScrollBar.css';
import aboutimage from '../../images/me1.jpg';


const About = () => {
    
    return (
        <>
            <div className='about' id='about'>
                <div className='aboutdata'>
                    <h1 className='aboutheading'>About👨‍💻<hr/></h1>
                    
                    
                    <div className='aboutcontent'>

                        <div className='aboutleft'>
                            <img src={aboutimage}></img>
                        </div>
                        <div className='aboutright'>
                            
                            <h3>About Me🤘</h3>
                            <h1> A 💪passionate Front-End Web Developer💻 based in Punjab, India❤️.</h1>
                            <p>As a Front-End Web Developer💻, my Tech Stack includes impressive skills✨ such as HTML, CSS, JavaScript, React and Tailwind CSS.
                                I excel in designing and maintaining📚 responsive Websites📲. I am also a UX Designer📱, who excels at providing smooth user experience🫶.
                                My expertise🧑🏻‍🎓 lies in writing clean and optimized codes🧑🏻‍💻 and utilizing cutting-edge development tools⚙️ and techniques🪤. I am also a team player🫂 
                                who thrives in collaborating🤝 with teams to produce outstanding web applications🌉.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default About;
