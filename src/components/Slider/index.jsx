import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function Slider(props) {
  return(
  <div className="slider">
      <AliceCarousel
        autoPlay autoPlayInterval="3000"
        autoHeight
        autoWidth>
        <img src="https://www.storestuffhere.com/wp-content/uploads/2015/07/ASS-Slider-Placeholder.png" className="sliderimg"/>
        <img src="https://www.storestuffhere.com/wp-content/uploads/2015/07/ASS-Slider-Placeholder.png" className="sliderimg" />
      </AliceCarousel>
  </div>
  )
}