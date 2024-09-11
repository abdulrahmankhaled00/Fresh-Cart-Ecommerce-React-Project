/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/UserContext.js';
import { Helmet } from 'react-helmet';


export default function Register() {
  let {setToken}=useContext(userContext)
  let navigate=useNavigate()

  let [err,setErr]=useState(null)
  let [isLoading,setIsLoading]=useState(false)

  async function loginSubmit(values){
    setIsLoading(true)
    let {data} =await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
    .catch((err)=>{
      setIsLoading(false)
      console.log(err);
      setErr(err.response.data.message)
    });
    if(data.message === "success"){
      setIsLoading(false)
      localStorage.setItem('token',data.token)
      setToken(data.token)
      navigate('/')
    }
    
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  const validationSchema= Yup.object({
    email: Yup.string().matches(emailRegex, 'Invalid email address').required('Email is required'),
    password: Yup.string().matches(passwordRegex,'Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character').required('password is requierd'),
  });

  let formik=useFormik({
    initialValues:{
      email:'',
      password:'',
    },validationSchema,
    onSubmit:loginSubmit
    
  })

  return (
    <>
                       <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
            </Helmet>
     <div >
      {err?<div className='alert alert-danger p-2 mt-2'>{err}</div>:''}
      <h2>Login Now</h2>
      <form onSubmit={formik.handleSubmit}>

      <label htmlFor="email" className='my-2'>Email:</label>
      <input className=' form-control ' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' type="text"  />
      {formik.errors.email  &&formik.touched.email ?<div className='alert alert-danger mt-2 p-2'>{formik.errors.email }</div>:""}

      <label htmlFor="password" className='my-2'>password:</label>
      <input className=' form-control ' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password' type="password"  />
      {formik.errors.password &&formik.touched.password ?<div className='alert alert-danger mt-2 p-2'>{formik.errors.password }</div>:""}

      {isLoading?      <button className='d-flex btn bg-main text-white mt-2 ms-auto'>
        <i className='fas fa-spinner fa-spin'></i>
      </button>:      <button type='submit' disabled={! (formik.isValid && formik.dirty) } className=' d-flex btn bg-main text-white mt-2 ms-auto '>Login</button>
    }

      </form>
     </div>
    </>
  )
}
