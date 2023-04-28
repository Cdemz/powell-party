import React from 'react'
import IMG1 from '../../images/download (12).jpeg'
import IMG2 from '../../images/owner.jpeg'
import FRAME from '../../images/download (11).jpeg'
import {AiFillStar} from 'react-icons/ai'
import './About.css'

const About = () => {
  return (
    
    <div>
        <div className="about">

            <div className='first__img'><img src={IMG1} alt="" /></div>
            <div className='about__us' id='about'>
                <div className="bg__img">
                    <img src={FRAME} alt="" />
                </div>
                <div className="about__us__content">
                   <h1>ABOUT US</h1> 
              <img src={IMG2} alt="" />
              <div></div>
              <h3> Your #1 provider of DJ & Karaoke services in TX!</h3>
              <p>We take pride in creating unforgettable experiences for our clients. With years of experience and a team of dedicated professionals. From corporate events to weddings and everything in between, we handle every detail with precision and care. Contact us today to see how we can bring your vision to life.  ​<span>Leave Us A 5 Star Review</span></p>
              <a href="https://tinyurl.com/mrxp83s4" target="_blank">
                              <button className='about__btn btn' ><AiFillStar/> Star</button> 

              </a>
                </div>
              
            </div>
    
        </div>
     
    </div>
  )
}

export default About