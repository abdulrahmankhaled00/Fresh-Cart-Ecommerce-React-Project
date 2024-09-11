/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import style from './Cart.module.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { cartContext } from '../../context/CartContext.js'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BallTriangle } from 'react-loader-spinner'
import { Helmet } from 'react-helmet'

export default function Cart() {

  let {allCartProducts, updateCartProduct, deleteCartProduct,clearCartProducts ,setCartItemsQountity} = useContext(cartContext)
  let [cartDetails, setCartDetails] = useState(null)
  let [isloading, setIsloading] = useState(false)

  async function updateProductCountity(id, count) {
    let data = await updateCartProduct(id, count)
    setCartDetails(data)

  }
  async function deleteProduct(id) {
    setIsloading(true)

    let data = await deleteCartProduct(id)
    setCartDetails(data)
    setCartItemsQountity(data.data.data.products.length);
    setIsloading(false)



  }
  
  async function clearCart() {
    setIsloading(true)

    let data = await clearCartProducts()
    setCartDetails(data)
    setCartItemsQountity(0);
    setIsloading(false)


  }

  let headers = {
    token: localStorage.getItem('token')
  }
  async function cartProdcuts() {
    setIsloading(true)
    let data = await allCartProducts()
    setCartDetails(data)
    setIsloading(false)

  }
  useEffect(() => {
    cartProdcuts()
    console.log(cartDetails);

  }, [])

  // function cartProdcuts(){
  //   return axios.get('https://ecommerce.routemisr.com/api/v1/cart',{headers})
  // }

  // let {data}=useQuery({queryKey:["cart"],queryFn:cartProdcuts})
  // setCartDetails(data)

  return (
    <>
                       <Helmet>
                <meta charSet="utf-8" />
                <title>Cart</title>
            </Helmet>
      <div className=" bg-main-light p-3 my-2">
        <h1 className=' text-center' >Cart</h1>
        <div class=" border border-1 boredb my-3  w-100 bg-black"></div>
        <div className="row">
            <div className="col-md-6 my-3 ">
              <h5 className=' text-main  '>Total Cart Price : {cartDetails?.data.data?.totalCartPrice?cartDetails?.data.data.totalCartPrice:0}</h5>
              <h5 className=' text-main   '>number of cart items : {cartDetails?.data?.numOfCartItems?cartDetails?.data.numOfCartItems:0}</h5>
            </div>
            <div className="col-md-6   align-items-end d-flex flex-column gap-2">
            <button onClick={()=>clearCart()} className='btn bg-danger text-white '>clear cart</button>

            <Link to={`/address/${cartDetails?.data.cartId}`} className='btn btn-main bg-main text-white '>check out</Link>
  

            </div>
          </div>
      {isloading? <BallTriangle
              height={500}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass="w-100 justify-content-center align-items-center "
              visible={true}
            />:            <>       

  
          {cartDetails?.data.data?.products.map((product) => <div key={product.product.id} className="row">
            <div className="col-md-2">
              <img src={product.product.imageCover} className='w-100' alt="" />
            </div>
            <div className="col-md-10 d-flex justify-content-between align-items-center">
              <div className="">
                <h4>{product.product.title}</h4>
                <h6 className='text-main'>price :{product.price} </h6>
                <button onClick={() => deleteProduct(product.product.id)} className=' text-decoration-none border border-0'><span><i className="fa-solid fa-trash-can  text-danger"></i> Remove</span></button>
              </div>
              <div>
                <button onClick={() => updateProductCountity(product.product.id, product.count + 1)} className='btnColor text-main'>+</button>
                <span className='mx-2'>{product.count} </span>
                <button onClick={() => updateProductCountity(product.product.id, product.count - 1)} className='btnColor text-main'>-</button>
              </div>
            </div>
            <div className=' border border-1 boredb my-3  w-100 bg-black'></div>
  
          </div>)}</>}


      </div>
    </>
  )
}