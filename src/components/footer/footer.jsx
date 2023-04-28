import React from 'react'
import './footer.css'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const footer = () => {
  return (
    <div>
      <div className='footer_bar'>
        <div className='footer_content'>
          <h1>LOCATION</h1>
          <p>It Would Be Updated When <br /> You Provide It</p>
        </div>
        <div className='footer_content'>
          <h1>HOURS</h1>
          <div className='hours'>
            <p>Mon,Tue,Wed,Thur</p>
            <p>Not Known</p>
          </div>

          <div className='hours'>
            <p>Fri,Sat</p>
            <p>Not Known</p>
          </div>

          <div className='hours'>
            <p>Sun</p>
            <p>Not Known</p>
          </div>
        </div>

        <div className='footer_content'>
          <div>
            <h1>Follow us on</h1>
            <div className='socials'>
              <a href="https://twitter.com/powell_party"><BsTwitter/></a>
              <a href="https://www.facebook.com/powellparty"><FaFacebookF/></a>
              <a href="https://www.instagram.com/powell_party"><BsInstagram/></a>
            </div>
          </div>

          <div>
            <h1>CONTACT US</h1>
            <p>(512)-820-8873</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default footer