/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import style from './Categories.module.css'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/counterSlice.js'
import { allcategoriesApi } from '../../redux/categories.js'
import { BallTriangle } from 'react-loader-spinner'

export default function Categories() {
  const { counter } = useSelector((state) => state.counter)
  const { categories, isLoading, isErr } = useSelector((state) => state.categoriesApi)
  console.log(isLoading);

  console.log(counter);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allcategoriesApi())
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>categories</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1 >categories</h1>
      {/* <button onClick={()=>dispatch(incrementByAmount(counter+=1))}>+</button>
     <h1 >counter: {counter}</h1> 
     
     <button onClick={()=>dispatch(decrement())}>-</button> */}
      <div className="row">
        {isLoading ?  <BallTriangle
              height={500}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass="w-100 justify-content-center align-items-center "
              visible={true}
            /> : categories.map((category) =>
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <div className='product cursor-pointer py-3 px-2'>
              <img
                src={category.image}
                alt={category.name}
                className='w-100'
                style={{
                  height: '200px',
                  objectFit: 'cover'
                }}
              />
              <h3 className='text-center'>{category.name}</h3>
            </div>
          </div>

        )}
      </div>
    </>
  )
}
