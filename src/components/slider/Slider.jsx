import React from 'react'
import './Slider.css'
import IMG1 from '../../images/slider1.jpeg'
import IMG2 from '../../images/slider2.jpeg'
import IMG3 from '../../images/slider3.jpeg'
import IMG4 from '../../images/slider4.jpeg'
import {useState} from 'react'


const Slider = () => {
    
    const [activeNav, setActiveNav] = useState ('#')
    var counter = 1;
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }

    }, 5000);

  return (
    <div class='slider'>
        <div class="slides">
            <input type="radio" name='radio-btn' id='radio1'/>
            <input type="radio" name='radio-btn' id='radio2'/>
            <input type="radio" name='radio-btn' id='radio3'/>
            <input type="radio" name='radio-btn' id='radio4'/>

            <div class="slide first">
                <img src={IMG1} alt="" />
                <div className='text__box'>
                    <div className='dtext'><h2> Austin's most amazing</h2></div>
                    <div className='dtext__btn'> <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><button className='text__btn btn' >ABOUT US</button></a></div>
                </div>
            </div>
            <div class="slide ">
                <img src={IMG3} alt="" />
                <div className='text__box'>
                    <div className='dtext'><h2>best party dj</h2></div>
                    <div className='dtext__btn'><button className='text__btn btn'>SERVICES</button></div>
                </div>
            </div>
            <div class="slide ">
                <img src={IMG4} alt="" />
                <div className='text__box'>
                    <div className='dtext'><h2>shop from us</h2></div>
                    <div className='dtext__btn'><button className='text__btn btn' >STORE</button></div>
                </div>
            </div>
            <div class="slide ">
                <img src={IMG2} alt="" />
                <div className='text__box'>
                    <div className='dtext'><h2>Client Thought</h2></div>
                    <div className='dtext__btn'><button className='text__btn btn'>REVIEWS</button></div>
                </div>
            </div>


            <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
                <div className="auto-btn4"></div>
            </div>

        </div>


        <div className="navigation-manual">
            <label For="radio1" className='manual-btn'></label>
            <label For="radio2" className='manual-btn'></label>
            <label For="radio3" className='manual-btn'></label>
            <label For="radio4" className='manual-btn'></label>
        </div>
        </div>
  )
}


export default Slider