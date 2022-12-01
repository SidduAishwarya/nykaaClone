import React from 'react'
import './Card.css'
import Component4 from './Component4';
import card1 from './card1.avif'
import card2 from './card2.avif'
import card3 from './card3.avif'
import card4 from './card4.avif'
import card5 from './card5.avif'
import card6 from './card6.avif'

const Card = () => {
  return (
    <div>
    <div className='title'>TOP BRANDS</div>
    <div className='division'>
    <Component4 text1={"Last Chance To Grab These Offers!"} card1={card1} text2={"Upto 40% Off"}/>
    <div className='space'>
    <Component4 text1={"Buy 2 Get 1 Free"} card1={card2} text2={"Flat 10% Off On Singles"}/>
    </div>
    </div>
    <div className='division'>
    <Component4 text1={"Buy 2 Get 1 Free Gift"} card1={card3} text2={"Flat 10% Off"}/>
    <div className='space'>
    <Component4 text1={"Upto 30% Off + Free Face Wash"} card1={card4} text2={"worth Rs. 139 on Rs. 699"}/>
    </div>
    </div>
    <div className='division'>
    <Component4 text1={"Upto 35% Off"} card1={card5} text2={"Face Makeup That Fits Me As I Am!"}/>
    <div className='space'>
    <Component4 text1={"Bestseller Minis Starting at ₹425"} card1={card6} text2={"+ Exciting Gifts on Purchase!"}/>
    </div>
    </div>
    </div>
  )
}

export default Card
