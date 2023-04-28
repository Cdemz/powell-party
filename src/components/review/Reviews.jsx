import React, { useState } from "react";
import {BsStarFill} from "react-icons/bs"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import './Reviews.css'

const Testimonial = ({ testimonials }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const nextSlide = () => {
      setCurrentSlide((currentSlide + 1) % testimonials.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide(
        currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1
      );
    };
  
    return (
      <div className="test">
        <div id="testimonial-container" className="testimonial-container">
            <h1>Reveiws</h1>
          <p>{testimonials[currentSlide].testimonial}</p>
          {/* <img src={testimonials[currentSlide].image} alt="Profile Image" /> */}
          <h3>{testimonials[currentSlide].name}</h3>
          <h6>{testimonials[currentSlide].job}</h6>
          <div><BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /></div>
        </div>
        <div className="buttons">
         <button id="prev" onClick={prevSlide} className="div__btn"> 
         <AiOutlineArrowLeft />
        </button>
        <button id="next" onClick={nextSlide} className="div__btn ">
        <AiOutlineArrowRight />
        </button>   
        </div>
        
      </div>
    );
  };
  
  export default Testimonial;