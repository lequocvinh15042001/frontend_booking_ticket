import React from 'react';
import Slider from 'react-slick';
import './Sliders.scss';
import sliderData from '../../assets/sliderData';
import { StyledSlider } from './Slider';
import poster from "../../assets/banner.jpg"
const Sliders = () => {
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  const GalleryPrevArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-prevArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
      </div>
    );
  };
  const GalleryNextArrow = ({ currentSlide, slideCount, ...props }) => {
    const { className, onClick } = props;

    return (
      <div {...props} className="custom-nextArrow" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </div>
    );
  };
  const settings = {
    className: 'center',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <GalleryNextArrow />,
    prevArrow: <GalleryPrevArrow />,
  };

  return (
    <div>
      <img
          className="poster"
          src={poster}
      ></img>
    <StyledSlider {...settings}>
      {sliderData?.map((slide, index) => {
        return (
          <div key={index}>
            <img src={slide.image} alt="slider" key={index} className="image" />
            {/* <span>{slide.name}</span> */}
          </div>
        );
      })}
    </StyledSlider>
    </div>
  );
};

export default Sliders;
