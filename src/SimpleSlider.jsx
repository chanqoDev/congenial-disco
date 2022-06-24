import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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
                  <img
                    src="Amazon-aws.png"
                    alt="logo"
                    width="100px"
                    className="center"
                  />
                </p>
              </div>
            );
          })}
        </Slider>
        <div style={{ "margin-top": "30vh" }}> hello</div>
      </div>
    );
  }
}
