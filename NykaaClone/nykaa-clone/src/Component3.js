import React from 'react'
import './Component3.css'
import SimpleImageSlider from "react-simple-image-slider";

import offer from './offer.avif'

const images = [
    { url: "https://images-static.nykaa.com/uploads/2e3c5478-8996-438c-ae5b-974d44caa401.gif?tr=w-1200,cm-pad_resize" },
    { url: "https://images-static.nykaa.com/uploads/3c96234a-6554-4609-8ea6-f514edb641d4.gif?tr=w-1200,cm-pad_resize" },
    
  ];
const Component3 = () => {
  return (
    <div className='slider'>
      <SimpleImageSlider
        width={1300}
        height={250}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <img className="offer"src={offer} alt="" />
    </div>
  )
}

export default Component3
