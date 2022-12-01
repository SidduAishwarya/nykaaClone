import React from 'react'
import './Component2.css'
import liveNow from './livenow.webp'
import makeup from './makeup.avif'
import skin from './skin.avif'
import luxe from './luxe.avif'
import haircare from './haircare.avif'
import bath from './bath&body.avif'
import fragrance from './fragrance.avif'
import appliences from './Appliences.avif'
import wellness from './Wellness.avif'

const Component2 = () => {
  return (
    <div className='whole'>
      <div className='individual'>
      <img src={liveNow} alt="" />
      <div className='font'>Live Now</div>
      </div>
      <div className='individual'>
      <img src={makeup} alt="" />
      <div className='font'>Makeup</div>
      </div>
      <div className='individual'>
      <img src={skin} alt="" />
      <div className='font'>Skin</div>
      </div>
      <div className='individual'>
      <img src={luxe} alt="" />
      <div className='font'>Luxe</div>
      </div>
      <div className='individual'>
      <img src={haircare} alt="" />
      <div className='font'>Haircare</div>
      </div>
      <div className='individual'>
      <img src={bath} alt="" />
      <div className='font'>Bath&body</div>
      </div>
      <div className='individual'>
      <img src={fragrance} alt="" />
      <div className='font'>Fragrance</div>
      </div>
      <div className='individual'>
      <img src={appliences} alt="" />
      <div className='font'>Appliences</div>
      </div>
     <div className='individual1'>
     <img src={wellness} alt="" />
     <div className='font'>Wellness</div>
     </div>
    </div>
  )
}

export default Component2
