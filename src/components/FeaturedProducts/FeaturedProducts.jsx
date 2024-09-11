/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import style from './FeaturedProducts.module.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BallTriangle } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context/CartContext.js';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList, deleteFromWishList, getWishList } from '../../redux/wishListSlice.js';

export default function FeaturedProducts() {
  let dispatch=useDispatch()

  let { addToCart ,setCartItemsQountity} = useContext(cartContext)

  async function addProduct(id) {
    let {data} = await addToCart(id).then();
    console.log(data);
    
    setCartItemsQountity(data.data.products.length);
    

  }



  let {List,isloading,isErr}=useSelector(state=>state.wishList)
  const [wishList, setWishList] = useState([]);
  

   function loveProduct(event, productId) {
    event.preventDefault(); // Prevent default behavior like link redirection
    let newList=[]
   if(!wishList.includes(productId)){
   dispatch(addToWishList(productId)).then(()=>{
    toast('added to wish list', {
      icon: '❤',
    })
  })
    newList=[...wishList,productId]

   }else{
   dispatch(deleteFromWishList(productId)).then(()=>{
    toast('remove form wish List', {
      icon: '🤍',
    })
  })
    newList =wishList.filter(e=> e !==productId)

   }
   setWishList(newList)
  }

  useEffect(()=>{
    dispatch(getWishList())
  },[])

  useEffect(()=>{   
    setWishList(List)
  },[List])

  function getFeaturedProducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  const { data, isError, isLoading, isFetched } = useQuery({ queryKey: ["FeaturedProducts"], queryFn: getFeaturedProducts });

  return (
    <>
<div>
  <h1 >Featured Products</h1>
  {data?.data?.data ? (
    <div className="row">
      {data.data.data.map((product) => (
        <div key={product.id} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
          <div className="product cursor-pointer position-relative py-3 px-2 h-100">
            <Link to={`/productDetails/${product.id}`} className="d-block h-100">
              <img
                src={product.imageCover}
                title={product.title}
                className="w-100 img-fluid"
                alt=""
              />
              <div className="d-flex align-items-center mt-2">
                <div className="col">
                  <span className="text-main font-sm fw-bolder text-black">
                    {product.category.name}
                  </span>
                  <h3 className="h6 text-black">
                    {product.title.split(" ").slice(0, 2).join(" ")}
                  </h3>
                </div>
                <span className="ms-auto">
                  <span
                    onClick={(event) => loveProduct(event, product.id)}
                    className="position-absolute heart-place d-flex pe-2"
                    style={{ cursor: "pointer" }}
                  >
                    <i
                      className={`fa fa-heart fa-lg text-decoration-none ${
                        wishList.includes(product.id)
                          ? "text-danger"
                          : "text-secondary"
                      }`}
                    ></i>
                  </span>
                </span>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <span>{product.price} EGP</span>
                <span className="ms-auto">
                  <i className="fas fa-star rating-color"></i> {product.ratingsAverage}
                </span>
              </div>
            </Link>
            <button
              onClick={() =>
                addProduct(product.id).then(() => toast.success("Product added successfully"))
              }
              className="btn bg-main text-white w-100 btn-sm mt-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <BallTriangle
      height={500}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass="w-100 justify-content-center align-items-center"
      visible={true}
    />
  )}
</div>

    </>
  );
}
