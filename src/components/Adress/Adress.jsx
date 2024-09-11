/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import style from './Adress.module.css'
import {  useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { checkoutOnlinePayment } from '../../redux/ordars.js';
import { Helmet } from 'react-helmet';

export default function Adress() {

  let {cartId}=useParams()
  let {url,isloading,isErr}=useSelector((state)=>state.ordars)

  let dispatch =useDispatch()
  function submitAdress(valus){
    dispatch(checkoutOnlinePayment(cartId,valus))
    console.log(url);
  }
  useEffect(()=>{
    if(url!==''){
      console.log(url); 
      window.location.href = url;
    }
  },[url])
  const formik=useFormik({
    initialValues:{
      details:'',
      phone:'',
      city:'',
    },
    onSubmit:submitAdress
  })
  return (
    <>
                   <Helmet>
                <meta charSet="utf-8" />
                <title>address</title>
            </Helmet>
     <h1 >Adress</h1> 
     <form onSubmit={formik.handleSubmit} >
      <label htmlFor="details" className='text-main'>details :</label>
      <input className='form-control my-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.details} name='details' id='details' type="text" />

      <label htmlFor="phone" className='text-main'>phone :</label>
      <input className='form-control my-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} name='phone' id='phone' type="tel" />

      <label htmlFor="city" className='text-main'>city :</label>
      <input className='form-control my-2' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} name='city' id='city' type="text" />


      {isloading?<button className='d-flex btn bg-main text-white mt-2 ms-auto'>
        <i className='fas fa-spinner fa-spin'></i>
      </button>:<button  className='btn bg-main text-white my-2 d-block ms-auto'>pay now</button>}
     
     </form>
    </>
  )
}
