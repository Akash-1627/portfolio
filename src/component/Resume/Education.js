import React, { useEffect, useState } from 'react';
import './Resume.css';
// import '../../ScrollBar.css';


const Education = ({ id }) => {
    
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(false);

  const toggleSlider1 = () => {
    setIsOpen1(true);
    setIsOpen2(false);
  };
  const toggleSlider2 = () => {
    setIsOpen2(true);
    setIsOpen1(false);
  };
    return (
        <>
            <div className='education'>
                <div className='selectbox'>
                    
                    <div className={`selectedu ${isOpen1 ? 'eduopen' : 'educlosed'}`} onClick={toggleSlider1}>
                        <h3>Education</h3>
                    </div>
                    
                    <div className={`selectexp ${isOpen2 ? 'eduopen' : 'educlosed'}`} onClick={toggleSlider2}>
                        <h3>Skills</h3>
                    </div>
                </div>
                <div className='anim'>
                    
                
                    <div className={`educ ${isOpen1 ? 'open' : 'closed'}`}>
                        <div className='educdata media'>
                            <h1 className='educheading'>Education✍️<hr/></h1>
                            <div className='educcontent'>
                                <div className='schooling'>

                                    <h1>Schooling</h1>
                                    <div className='year'><h3>2008 - 2021</h3></div>
                                    <h3 className='school'>TATA D.A.V School, Sijua, Dhanbad, jharkhand</h3>
                                    <p>I have completed my schooling from TATA DAV School, Sijua, Dhanbad, Jharkhand with an
                                        excellent passing grade of 95.6% in 10th standard and 93% in 12th standard.</p>
                                </div>
                                <div className='college'>
                                    <h1>Bachelor of Technology (B.Tech)</h1>
                                    <div className='year'><h3>2021 - Present</h3></div>
                                    <h3 className='school'>Chitkara University, Punjab</h3>
                                    <p>I am currently pursuing my B.tech degree from Chitkara University, Punjab. I continued to strive for knowledge 
                                        here and gained a lot of it within my 3 semesters of studying here. My current CGPA is 9.48.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    

                    <div className={`educ ${isOpen2 ? 'open' : 'closed'}`}>
                        <div className='educdata'>
                            <h1 className='educheading'>Resume📃<hr/></h1>
                            

                            
                                <div className='educcontent'>
                                    <div className='schooling'>

                                        <h1>Summary</h1>
                                        {/* <div className='year'><h3>2008 - 2021</h3></div> */}
                                        <h3 className='name'>Akash Chakraborty</h3>
                                        {/* <h3 className='school'>TATA D.A.V School, Sijua, Dhanbad, jharkhand</h3> */}
                                        <p>Deliver high-quality designs based on client specifications. Manage projects smoothly to accomplish customer 
                                            objectives. Skilled at designing sites and writing clean codes. Implement successful content based on user needs.</p>
                                        <ul>
                                            <li>Dhanbad, Jharkhand</li>
                                            <li>akashchakraborty4372@gmail.com</li>
                                        </ul>
                                    </div>
                                    <div className='college'>
                                        <h1>Skills</h1>
                                        <div className='skill'>
                                            <div className='data'>
                                                <h4>HTML</h4>
                                                <h4>95%</h4>
                                            </div>
                                            <div className='bar'>
                                                <div className='progressbar html'></div>
                                            </div>
                                        </div>
                                        <div className='skill'>
                                            <div className='data'>
                                                <h4>CSS</h4>
                                                <h4>90%</h4>
                                            </div>
                                            <div className='bar'>
                                                <div className='progressbar css'></div>
                                            </div>
                                        </div>
                                        <div className='skill'>
                                            <div className='data'>
                                                <h4>JavaScript</h4>
                                                <h4>80%</h4>
                                            </div>
                                            <div className='bar'>
                                                <div className='progressbar js'></div>
                                            </div>
                                        </div>
                                        <div className='skill'>
                                            <div className='data'>
                                                <h4>React</h4>
                                                <h4>85%</h4>
                                            </div>
                                            <div className='bar'>
                                                <div className='progressbar react'></div>
                                            </div>
                                        </div>
                                        <div className='skill'>
                                            <div className='data'>
                                                <h4>Tailwind CSS</h4>
                                                <h4>75%</h4>
                                            </div>
                                            <div className='bar'>
                                                <div className='progressbar tcss'></div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                    </div>
            </div>
            
        </>
    );
}

export default Education;
