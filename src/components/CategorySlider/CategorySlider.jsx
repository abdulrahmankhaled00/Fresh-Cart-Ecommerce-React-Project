/* eslint-disable no-unused-vars */
import React from 'react'
import style from './CategorySlider.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategorySlider() {

  function allCategories(){
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }

  let {data}=useQuery({queryKey:["categorySlider"],queryFn:allCategories})
  
  // console.log("categories",data);
  
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    
  };

  return (
    <>
        <div className="row py-3">
      <div className="col-12">
        <div className="">
          {/* heading */}
          <h3 className="mb-0">Shop Popular Categories</h3>
        </div>
      </div>
      <div className="row g-4 d-flex justify-content-center">
        {/* Category Items */}
        {data?.data.data.map((category,index) => (
  <div className="col-lg-2 col-md-4 col-6  d-flex justify-content-center "key={index}>
    <div className="text-center">
      {/* img */}
      <div className="circle-container">
        <img
          src={category.image}
          alt={category.name}
          className="circle-image"
        />
      </div>
      {/* text */}
      <div className="mt-4">
        <h5 className="fs-6 mb-0">
          <a href="shop-grid.html" className="text-inherit">{category.name}</a>
        </h5>
      </div>
    </div>
  </div>
))}


      </div>
    </div>

    </>
  )
}
