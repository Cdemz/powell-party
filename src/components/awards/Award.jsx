import React from 'react'
import cert1 from '../../images/cert1.png'
import cert2 from '../../images/cert2.png'
import cert3 from '../../images/cert3.png'
import cert4 from '../../images/cert4.png'
// import {useState} from 'react'
import'./Award.css'


const Award = () => {
    
    var counter = 1;
    setInterval(() => {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }

    }, 5000);

  return (
    <div class='sliderx'>
        <div class="slidesx">
            <input type="radio" name='radio-btnx' id='radio1x'/>
            <input type="radio" name='radio-btnx' id='radio2x'/>
            <input type="radio" name='radio-btnx' id='radio3x'/>
            <input type="radio" name='radio-btnx' id='radio4x'/>

            <div class="slidex firstx">
                <img src={cert1} alt="" />
                
            </div>
            <div class="slidex ">
                <img src={cert2} alt="" />
               
            </div>
            <div class="slidex ">
                <img src={cert4} alt="" />
                
            </div>
            <div class="slidex ">
                <img src={cert3} alt="" />

            </div>


            <div className="navigation-autox">
                <div className="auto-btn1x"></div>
                <div className="auto-btn2x"></div>
                <div className="auto-btn3x"></div>
                <div className="auto-btn4x"></div>
            </div>

        </div>


        <div className="navigation-manual">
            <label For="radio1x" className='manual-btnx'></label>
            <label For="radio2x" className='manual-btnx'></label>
            <label For="radio3x" className='manual-btnx'></label>
            <label For="radio4x" className='manual-btnx'></label>
        </div>
        </div>
  )
}


export default Award