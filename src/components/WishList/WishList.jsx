/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import style from './WishList.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromWishList, getWishList } from '../../redux/wishListSlice.js';
import { BallTriangle } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

export default function WishList() {
  let {data,List,isloading,isErr}=useSelector(state=>state.wishList)
  console.log(data);
  // let dispatch=useDispatch()
  // useEffect(()=>{
  //     dispatch(getWishList())

    
  // },[])

  // useEffect(()=>{
  //   if(isloading){
  //     dispatch(getWishList())

  //   }
    
  // },[List,isloading])
  let dispatch=useDispatch()

  useEffect(()=>{
    console.log('hi');
    
    dispatch(getWishList())
  },[])
  useEffect(()=>{  
    console.log(data.length,List.length);
    if(data.length!==List.length) {
      dispatch(getWishList())
    }
  },[List])



  return (
    <>
                       <Helmet>
                <meta charSet="utf-8" />
                <title>wish List</title>
            </Helmet>
           <div className=" bg-main-light p-3 my-2">
        <h1 className=' text-center'>Wish List</h1>
        <div class=" border border-1 boredb my-3  w-100 bg-black"></div>
        {!isloading? data.map((product) => <div key={product.id} className="row">
          <div className="col-md-2">
            <img src={product.imageCover} className='w-100' alt="" />
          </div>
          <div className="col-md-10 d-flex justify-content-between align-items-center">
            <div className="">
              <h4>{product.title}</h4>
              <h6 className='text-main'>price :{product.price} </h6>
              <button onClick={()=>dispatch(deleteFromWishList(product.id))} className=' text-decoration-none border border-0'><span><i className="fa-solid fa-trash-can  text-danger"></i> Remove</span></button>
            </div>

          </div>
          <div className=' border border-1 boredb my-3  w-100 bg-black'></div>

        </div>):  <BallTriangle
              height={500}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass="w-100 justify-content-center align-items-center "
              visible={true}
            />}
      </div> 
    </>
  )
}
