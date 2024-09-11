/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import style from './Home.module.css'
import { counterContext } from '../../context/CounterContext.js'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts.jsx'
import CategorySlider from './../CategorySlider/CategorySlider';
import MainSlider from './../MainSlider/MainSlider';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
                   <Helmet>
                <meta charSet="utf-8" />
                <title>Fresh Cart</title>
            </Helmet>
    <MainSlider/>
    <CategorySlider/>
    <FeaturedProducts/>
        </>
  )
}
