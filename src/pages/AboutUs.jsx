import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import Moviecard from '../components/Moviecard';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import { Pagebtn } from '../components/Pagebtn';
import { Helmet } from 'react-helmet';
import kavin from '../assets/images/photo2.jpg'
import fardeen from '../assets/images/photo3.jpg'
import waseem from '../assets/images/photo1.jpg'
const AboutUs = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <h2 style={{ color: 'white', textAlign: 'center', fontSize: '7.5rem' }}>The Crew Members</h2>
          <br></br>
        </div>
        <div className="description">
          <h5 style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem' }}>WHO WE ARE?</h5>
          <p style={{ color: 'white', textAlign: 'center' }}>We are a team of <b>ERROR_WIZARDS</b> Who are currently</p>
          <p style={{ color: 'white', textAlign: 'center' }}>in the involvement of developing a responsive</p>
          <p style={{ color: 'white', textAlign: 'center' }}>MERN stack projects.</p>
          <br></br>
          <br></br>
        </div>
      </div>
      <section className="images">
        <div className="photo">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a href="https://waseem0605.netlify.app" target="_blank" rel="noopener noreferrer">
              <img src={waseem} alt="Product Owner" />
            </a>
            <p className="name" style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem' }}>Mohamed Waseem</p>
          </div>
          <div className="photo__job">
            <p style={{ color: 'white', textAlign: 'center' }}>Frontend Developer, UI&UX Designer</p>
          </div>
        </div>
        <br></br><br></br><br></br>
        
        <div className="photo">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a href="https://kavinkumars.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img className="middle" src={kavin} alt="Art Director" />
            </a>
            <p className="name" style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem' }}>Kavin Kumar</p>
          </div>
          <div className="photo__job">
            <p className="position__middle" style={{ color: 'white', textAlign: 'center' }}>Cloud Engineer</p>
          </div>
        </div>
        <br></br><br></br><br></br>

        <div className="photo">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a href="https://guileless-bavarois-86d61c.netlify.app/" target="_blank" rel="noopener noreferrer">
              <img src= {fardeen} alt="Tech Lead" />
            </a>
            <p className="name" style={{ color: 'white', textAlign: 'center', fontSize: '2.5rem' }}>Fardheen</p>
          </div>
          <div className="photo__job">
            <p style={{ color: 'white', textAlign: 'center' }}>Backend Developer</p>
          </div>
        </div>
      </section>
      <br></br><br></br><br></br>

      <footer style={{ color: 'white', textAlign: 'center' }}>
        <p>
          &copy;{new Date().getFullYear()} Created with <span style={{ fontSize: '1rem' }}> ♥ </span>by <b>Error Wizards Crew</b>. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
