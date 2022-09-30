import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const index = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    arrows: true,
    slide: "div",
  };
  return (
    <div style={{ width: "500px", backgroundColor: "teal" }}>
      <h2>Center Mode</h2>
      <Slider {...settings}>
        <div
          style={{
            backgroundColor: "teal",
            width: "100px",
            height: "100px",
            padding: "10px",
          }}
        >
          <h3>1</h3>
        </div>
        <div
          style={{
            backgroundColor: "teal",
            width: "100px",
            height: "100px",
            padding: "10px",
          }}
        >
          <h3>2</h3>
        </div>
        <div
          style={{
            backgroundColor: "teal",
            width: "100px",
            height: "100px",
            padding: "10px",
          }}
        >
          <h3>3</h3>
        </div>
        <div
          style={{
            backgroundColor: "teal",
            width: "100px",
            height: "100px",
            padding: "10px",
          }}
        >
          <h3>4</h3>
        </div>
        <div
          style={{
            backgroundColor: "teal",
            width: "100px",
            height: "100px",
            padding: "10px",
          }}
        >
          <h3>5</h3>
        </div>
        <div
          style={{
            backgroundColor: "teal",
            width: "100px",
            height: "100px",
            padding: "10px",
          }}
        >
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default index;
