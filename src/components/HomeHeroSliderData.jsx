import React from 'react';
import Slider from 'react-slick';
import heroSliderData from '../assets/logo/data/data-slider';

// import the sliders data
// prop drill down to the slider and set the data attribute to the name of our data object.
const HomeHeroSliderData = () => {
  return (
    <div className="homeHeroSlider">
      <Slider data={heroSliderData} />
    </div>
  );
};

export default HomeHeroSliderData;
