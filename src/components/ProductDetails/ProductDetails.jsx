/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { cartContext } from '../../context/CartContext.js';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

export default function ProductDetails() {
  let { id } = useParams()
  let { addToCart ,setCartItemsQountity} = useContext(cartContext)

  async function addProduct(id) {
    let {data} = await addToCart(id)
    setCartItemsQountity(data.data.products.length);
    

  }

  function getProduct(productId) {
    console.log(`https://ecommerce.routemisr.com/api/v1/products/${id}`);

    return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }


  let { data } = useQuery({ queryKey: ["ProductDetails"], queryFn: getProduct })
  console.log(data);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {data?.data.data ?
        <div className="row py-2 align-items-center">
          <div className="col-md-4">
                <Slider {...settings}>
                  {data?.data.data.images.map((image)=><div><img height={450} src={image} alt={data.data.data.category.name} className='w-100'></img></div> )}
            </Slider>
          </div>
          <div className="col-md-8">
            <h2 className='h5'>{data.data.data.title} </h2>
            <p>{data?.data.data.description}</p>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data?.data.data.category?.name}</title>
            </Helmet>
            <h6 className='text-main'>{data?.data.data.category?.name}</h6>
            <h6 className='text-main'>Price : {data?.data.data.price} EGP</h6>
            <div className='d-flex  justify-content-between'>
              <h6 className=''>ratingQunntitiy : {data?.data.data.price}</h6>

              <span><i className='fas fa-star rating-color'> </i> {data?.data.data.ratingsAverage}</span>
            </div>
            <button onClick={() => {
                    addProduct(data?.data.data.id).then(()=>toast.success('product adedd succisfully'))
                     
                    }} className='btn bg-main text-white w-100 btn-sm mt-2'> + add to cart</button>

          </div>
        </div>
        : ""}

    </>
  )
}
