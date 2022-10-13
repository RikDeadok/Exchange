import React from 'react'
import Slider from 'react-slick'

export const SliderMain = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
    };
    return (
        <Slider {...settings} className="slider__main">
            <div className="slider__container">
                <h3>1</h3>
            </div>
            <div className="slider__container">
                <h3>2</h3>
            </div>
            <div className="slider__container">
                <h3>3</h3>
            </div>
        </Slider>
    );
  }