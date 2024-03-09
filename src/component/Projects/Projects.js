import React, { useRef } from 'react';
import './Projects.css';
// import '../../ScrollBar.css';
// import demoimage from '../../images/me.png';
import node from "../../images/node.svg";
import react from '../../images/react.svg';
import firebase from '../../images/firebase.svg';
import css from '../../images/css.svg';
// import javascript from '../../images/js.svg';

import vitalVault from '../../images/Vital Vault Video.mkv';
import coinworld from '../../images/coinworld.mp4';
import webchat from '../../images/webchat.mp4';


const Projects = () => {
    
    
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);


  const handleMouseEnter1 = () => {
    videoRef1.current.play();
};
const handleMouseEnter2 = () =>{
      videoRef2.current.play();

  }
  const handleMouseEnter3 = () =>{
    videoRef3.current.play();

}

  const handleMouseLeave1 = () => {
    videoRef1.current.pause();
    videoRef1.current.currentTime = 0;
};
const handleMouseLeave2 = () =>{
    videoRef2.current.pause();
    videoRef2.current.currentTime = 0;

  }
  const handleMouseLeave3 = () =>{
    videoRef3.current.pause();
    videoRef3.current.currentTime = 0;

  }

    return (
        <>
            <div className='project' id='projects'>
                <div className='projectdata'>
                    <h1 className='projectheading'>Projects📑<hr/></h1>
                    <div className='projectcontent'>
                        <div className='projectleft'>
                            <div className='image' onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>

                            <video ref={videoRef1} muted src={vitalVault}></video>
                            </div>
                        </div>
                        <div className='projectright'>
                            <h2>Vital Vault🗳️<hr/></h2>
                            <p>Vital vault is a Full Stack Health Care Data Management System where all
                                the healthcare data of patients can be stored and retrieved as
                                per user’s and organisation’s needs.</p>
                            <div className='techused'>
                                <div className='techHead'>Tech Used<span>&nbsp;&nbsp; |</span></div>
                                <div className='tech'>React&nbsp;<img src={react} alt='react'></img></div>
                                <div className='tech'>NodeJS&nbsp;<img src={node} alt='node'></img></div>
                            </div>
                            <div className='navbuttons'>
                                <a target='_blank' rel='noreferrer' href='https://github.com/Akash-1627/api_avengers'><div className='codebutton'>Code&nbsp;<i className='bx bxl-github'></i></div></a>
                                <a target='_blank' rel='noreferrer' href='https://api-avengers-frontend.vercel.app/'><div className='demobutton'>Live Demo&nbsp;<i className='bx bx-link-external'></i></div></a>
                            </div>
                            

                        </div>
                    </div>

                    <div className='projectcontent reverse'>
                        <div className='projectleft'>
                            <div className='image' onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>

                                <video ref={videoRef2} muted src={webchat}></video>
                            </div>
                        </div>
                        <div className='projectright'>
                            <h2>WebChat📲<hr/></h2>
                            <p>It is a Firebase maintained Chat Application through which user can send / receive chats and images from various users.</p>
                            <div className='techused'>
                            <div className='techHead'>Tech Used<span>&nbsp;&nbsp; |</span></div>
                                <div className='tech'>React&nbsp;<img src={react} alt='react'></img></div>
                                <div className='tech'>Firebase&nbsp;<img src={firebase} alt='firebase'></img></div>
                            </div>
                            <div className='navbuttons'>
                                <a target='_blank' rel='noreferrer' href='https://github.com/Akash-1627/WebChat'><div className='codebutton'>Code&nbsp;<i className='bx bxl-github'></i></div></a>
                                <a target='_blank' rel='noreferrer' href='https://akash-1627.github.io/WebChat/'><div className='demobutton'>Live Demo&nbsp;<i className='bx bx-link-external'></i></div></a>
                            </div>
                            

                        </div>
                    </div>

                    <div className='projectcontent'>
                        <div className='projectleft'>
                            <div className='image' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>

                            <video ref={videoRef3} muted src={coinworld}></video>
                            </div>
                        </div>
                        <div className='projectright'>
                            <h2>CoinWorld🪙<hr/></h2>
                            <p>CoinWorld is a web based crypto tracking website that allows users to search information about various cryptocurrencies in real-time.</p>
                            <div className='techused'>
                            <div className='techHead'>Tech Used<span>&nbsp;&nbsp; |</span></div>
                                <div className='tech'>React&nbsp;<img src={react} alt='reract'></img></div>
                                <div className='tech'>CSS3&nbsp;<img src={css} alt='css'></img></div>
                            </div>
                            <div className='navbuttons'>
                                <a target='_blank' rel='noreferrer' href='https://github.com/Akash-1627/coinworld'><div className='codebutton'>Code&nbsp;<i className='bx bxl-github'></i></div></a>
                                <a target='_blank' rel='noreferrer' href='https://akash-1627.github.io/coinworld/'><div className='demobutton'>Live Demo&nbsp;<i className='bx bx-link-external'></i></div></a>
                            </div>
                            

                        </div>
                    </div>


                </div>
            </div>
            
        </>
    );
}

export default Projects;
