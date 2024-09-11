/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import style from './Brands.module.css'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/counterSlice.js'
import { allBrndsApi } from '../../redux/brandsApi.js'
import { BallTriangle } from 'react-loader-spinner'

export default function Brands() {
  const {counter} =useSelector((state)=>state.counter)
  const {brands,isLoading,isErr} =useSelector((state)=>state.brandsApi)
  console.log(isLoading);
  
  console.log(counter);
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(    allBrndsApi())
  },[])
  
  return (
    <>
               <Helmet>
                <meta charSet="utf-8" />
                <title>Brands</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            
     <h1 >Brands</h1> 
     {/* <button onClick={()=>dispatch(incrementByAmount(counter+=1))}>+</button>
     <h1 >counter: {counter}</h1> 
     
     <button onClick={()=>dispatch(decrement())}>-</button> */}
     <div className="row">
     {isLoading?  <BallTriangle
              height={500}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass="w-100 justify-content-center align-items-center "
              visible={true}
            />:brands.map((brand)=>
            <div className="col-md-3">
              <div className='product cursor-pointer py-3 px-2'>
                <img src={brand.image} alt="" className='w-100' />
              </div>
            </div>
          )}
     </div>
    </>
  )
}
