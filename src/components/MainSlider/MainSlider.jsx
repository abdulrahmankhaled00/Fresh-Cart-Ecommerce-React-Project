/* eslint-disable no-unused-vars */
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sliderImage1 from '../../Assets/images/slider/slider-image-1.jpg';
import sliderImage2 from '../../Assets/images/slider/slider-image-2.jpg';
import sliderImage3 from '../../Assets/images/slider/slider-image-3.jpg';

import groceryImage1 from '../../Assets/images/banner/ad-banner-1.jpg';
import groceryImage2 from '../../Assets/images/banner/ad-banner-2.jpg';
import { Link } from 'react-router-dom';

export default function MainSlider() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  // إزالة الأسهم
    dotsclassName: 'slick-dots'
  };

  return (
    <>
      <div className="row py-4  custom-padding ">
        <div className="col-xxl-8 col-xl-7 rounded-4 position-relative  slider-image ">
          <Slider {...settings}>

            <div className=' position-relative'>
              <div className=" position-absolute move">
                <div className="d-flex align-items-center mb-4">
                  <span>Exclusive Offer</span>
                  <span className="badge bg-danger ms-2">35%</span>
                </div>

                <h2 className="text-dark display-5 fw-bold mb-3">Chocozay <br /> wafer-rolls Deals</h2>
                <p className="fs-5 text-dark">Only on this week... Don’t miss</p>
                <div className="mb-3 mt-3">
                  <span className="text-dark">
                    Start from
                    <span className="fs-3 text-danger ms-1">$34.99</span>
                  </span>
                </div>
                <Link to={'/products'} className="btn bg-main btnColor btn-main text-white" tabIndex="0">
                  Shop Deals Now
                  <i className="fa-solid fa-arrow-right fw ms-1"></i>
                </Link>
              </div>
              <img
                src={sliderImage1}
                className="w-100 rounded-4"
                style={{ objectFit: 'cover', height: '500px' }}  // تناسق الصور
                alt=""
                height={550}
              />
            </div>          <div className=' position-relative'>
              <div className=" position-absolute move">
                <div className="d-flex align-items-center mb-4">
                  <span>Exclusive Offer</span>
                  <span className="badge bg-danger ms-2">35%</span>
                </div>

                <h2 className="text-dark display-5 fw-bold mb-3">Chocozay <br /> wafer-rolls Deals</h2>
                <p className="fs-5 text-dark">Only on this week... Don’t miss</p>
                <div className="mb-3 mt-3">
                  <span className="text-dark">
                    Start from
                    <span className="fs-3 text-danger ms-1">$34.99</span>
                  </span>
                </div>
                <Link to={'/products'} className="btn bg-main btnColor btn-main text-white" tabIndex="0">
                  Shop Deals Now
                  <i className="fa-solid fa-arrow-right fw ms-1"></i>
                </Link>
              </div>
              <img
                src={sliderImage2}
                className="w-100 rounded-4"
                style={{ objectFit: 'cover', height: '500px' }}  // تناسق الصور
                alt=""
                height={550}
              />
            </div>          <div className=' position-relative'>
              <div className=" position-absolute move">
                <div className="d-flex align-items-center mb-4">
                  <span>Exclusive Offer</span>
                  <span className="badge bg-danger ms-2">35%</span>
                </div>

                <h2 className="text-dark display-5 fw-bold mb-3">Chocozay <br /> wafer-rolls Deals</h2>
                <p className="fs-5 text-dark">Only on this week... Don’t miss</p>
                <div className="mb-3 mt-3">
                  <span className="text-dark">
                    Start from
                    <span className="fs-3 text-danger ms-1">$34.99</span>
                  </span>
                </div>
                <Link to={'/products'} className="btn bg-main btnColor btn-main text-white" tabIndex="0">
                  Shop Deals Now
                  <i className="fa-solid fa-arrow-right fw ms-1"></i>
                </Link>
              </div>
              <img
                src={sliderImage3}
                className="w-100 rounded-4"
                style={{ objectFit: 'cover', height: '500px' }}  // تناسق الصور
                alt=""
                height={550}
              />
            </div>
          </Slider>
        </div>
        <div className="col-xxl-4 p-0 position-relative">
          <div className="pb-3 position-relative" style={{ height: '241px' }}>
            <div className="p-4 position-absolute" style={{ zIndex: 1 }}>
              <h3 className="mb-0 fw-bold">
                10% cashback on
                <br />
                personal care
              </h3>
              <div className="mt-3 mb-3 fs-5">
                <p className="mb-0">Max cashback: $12</p>
                <span>
                  Code:
                  <span className="fw-bold text-dark">CARE12</span>
                </span>
              </div>
              <Link to={'/products'} className="btn btn-dark">Shop Now</Link>
            </div>
            <img
              src={groceryImage1}
              style={{ objectFit: 'cover', objectPosition: 'right', height: '241px' }}
              className="w-100 rounded-4"
              alt=""
              height={250}
            />
          </div>
          <div className="pt-3 position-relative" style={{ height: '241px' }}>
            <div className="p-4 position-absolute" style={{ zIndex: 1 }}>
              <h3 className="fw-bold mb-3">
                Say yes to
                <br />
                season’s fresh
              </h3>
              <div className="mt-3 mb-3 fs-5">
                <p className="fs-5 mb-0">
                  Refresh your day
                  <br />
                  the fruity way
                </p>
              </div>
              <Link to={'/products'} className="btn btn-dark">Shop Now</Link>
            </div>
            <img
              src={groceryImage2}
              style={{ objectFit: 'cover', objectPosition: 'right', height: '241px' }}
              className="w-100 rounded-4"

              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
