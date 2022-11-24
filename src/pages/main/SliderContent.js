import React from "react";
import { Link } from "react-router-dom";
import './SliderContent.scss'

function SliderContent({activeIndex,imgSlider}){
  return(
    <section>
      <Link id="ProductBigCategory" to="/product/4">
      {imgSlider.map((slide,index)=>(
        <div key={index} 
        className={index === activeIndex
        ? "slides active"
        : "inactive"}>
          <img className="slide-img" src={slide.urls} alt="img"/>
          <h2 className="slide-title">{slide.title}</h2>
          <p className="slide-text">{slide.text}</p>
        </div>
      ))}
      </Link>
    </section>
  )
}
export default SliderContent;
