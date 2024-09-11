/* eslint-disable no-unused-vars */
import React from 'react'
import style from './NotFound.module.css'
import { Helmet } from 'react-helmet'
import ErrorImage from '../../Assets/images/error.svg'

export default function NotFound() {
  return (
    <>
                       <Helmet>
                <meta charSet="utf-8" />
                <title>Page not found</title>
            </Helmet>
            <div className=' d-flex justify-content-center p-5' >
            <img src={ErrorImage}  alt="" />

            </div>
    </>
  )
}
