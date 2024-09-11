/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import style from './AllOrdars.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { userOrdars } from '../../redux/ordars.js';
import { BallTriangle } from 'react-loader-spinner';
import { Helmet } from 'react-helmet';

export default function AllOrdars() {
  const {data,isloading,isErr}=useSelector(state=>state.ordars)
  console.log(data);

  let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(userOrdars())
  },[])
  
  return (
    <>
                       <Helmet>
                <meta charSet="utf-8" />
                <title>all Orders</title>
            </Helmet>
            <div className="bg-main-light p-3 my-2">
  <h1 className="text-center">All Orders</h1>
  <div className=' border border-1 boredb my-3  w-100 bg-black'></div>

  {isloading ? (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass="w-100 d-flex justify-content-center align-items-center"
      visible={true}
    />
  ) : (
    data.map((order) => (
      <div className="row p-3" key={order._id}>
        <div className="col-12 col-md-10 mb-3">
          <h4>Order Information:</h4>
          <p>
            <strong>Order ID:</strong> {order._id}
          </p>
          <p>
            <strong>Payment Method:</strong> {order.paymentMethodType}
          </p>
          <p>
            <strong>Total Price:</strong> ${order.totalOrderPrice}
          </p>
          <p>
            <strong>Paid At:</strong> {new Date(order.paidAt).toLocaleString()}
          </p>
        </div>

        <div className="col-12 col-md-2 d-flex justify-content-center align-items-center mb-3">
          <img
            src={order.cartItems[0].product.imageCover}
            alt={order.cartItems[0].product.title}
            className="img-fluid"
            style={{ maxHeight: '200px' }}
          />
        </div>

      <div className=' border border-1 boredb my-3  w-100 bg-black'></div>
      </div>
    ))
  )}
</div>

    </>
  )
}
