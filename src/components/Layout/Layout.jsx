/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import style from './Layout.module.css'
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { getWishList } from './../../redux/wishListSlice';
import { useDispatch } from 'react-redux';
import { cartContext } from '../../context/CartContext.js';

export default function Layout() {
  let {allCartProducts,setCartItemsQountity} = useContext(cartContext)

  let dispatch=useDispatch()
  async function cartProdcuts() {
    let {data} = await allCartProducts()
    setCartItemsQountity(data.data.products.length);
    
  }
  useEffect(()=>{
    dispatch(getWishList())
    cartProdcuts()
  },[])

  return (
    <>
     <NavBar/>
     <div  className=' container mx-auto py-4'>
     <Outlet>
      
     </Outlet>
     </div>

     <Footer/>
    </>
  )
}
