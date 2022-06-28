import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import coin from '../src/assets/logo/coin.svg';
export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 100,
      slidesToShow: 7,
      slidesToScroll: 3,
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return (
              <div key={index}>
                <h3>{item}</h3>
                <p>
                  <img src={coin} alt="logo" width="100px" className="center" />
                </p>
              </div>
            );
          })}
        </Slider>
        <div style={{ 'margin-top': '30vh' }}> hello</div>
      </div>
    );
  }
}
