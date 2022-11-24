import React from "react";
import './Button.scss'

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Buttons({prevSlide,nextSlide}){
  
  return(
    <div className="arrows">
      <span className="prev"
        onClick={prevSlide}>
          <FiChevronLeft /></span>
      <span className="next"
        onClick={nextSlide}>
        <FiChevronRight /></span>
    </div>
  )
}
export default Buttons;
