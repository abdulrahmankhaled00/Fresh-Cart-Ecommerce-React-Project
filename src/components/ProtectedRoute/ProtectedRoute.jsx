/* eslint-disable no-unused-vars */
import React from 'react'
import style from './ProtectedRoute.module.css'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
  if(localStorage.getItem('token') !== null ){
    return props.children
  }else{
    console.log('hi');
    return <Navigate to={'/login'}/>
  }
}
