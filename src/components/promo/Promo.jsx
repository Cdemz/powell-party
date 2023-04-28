import React from 'react'
import './Promo.css'
import awe4 from '../../images/234.png'

const Promo = () => {
  return (
    <div>
        <div className="promo">
            <div className='stand'>
                <p>Made by: <img src={awe4} alt="" /></p> 
            </div>

            <div>
                <p>Website Design, Marketing, Infotainment by Ademola Pearl</p>
            </div>
        </div>
    </div>
  )
}

export default Promo