/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function Register() {

  let navigate=useNavigate()

  let [err,setErr]=useState(null)
  let [isLoading,setIsLoading]=useState(false)

  async function registerSubmit(values){
    setIsLoading(true)
    let {data} =await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
    .catch((err)=>{
      setIsLoading(false)
      console.log(err);
      
      setErr(err.response.data.message)
    });
    if(data.message === "success"){
      setIsLoading(false)

      navigate('/login')
    }
    
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^((\+20|0)?1[0125][0-9]{8})$/  ;
  const passwordRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  const validationSchema= Yup.object({
    name : Yup.string().min(3,'you must enter name more than 3 character').max(15,'you must enter name less than 15 character').required('name is required'),
    email: Yup.string().matches(emailRegex, 'Invalid email address').required('Email is required'),
    phone: Yup.string().matches(phoneRegex, 'Invalid phone number').required('Phone number is required'),
    password: Yup.string().matches(passwordRegex,'Password must be at least 8 characters long, include uppercase and lowercase letters, a number, and a special character').required('password is requierd'),
    rePassword: Yup.string().oneOf([Yup.ref("password")],'Passwords must match').required('repassword is requierd')
  });

  let formik=useFormik({
    initialValues:{
      name:'',
      email:'',
      phone:'',
      password:'',
      rePassword:''
    },validationSchema,
    onSubmit:registerSubmit
    
  })

  return (
    <>
               <Helmet>
                <meta charSet="utf-8" />
                <title>Register</title>
            </Helmet>
     <div >
      {err?<div className='alert alert-danger p-2 mt-2'>{err}</div>:''}
      <h2>Register Now</h2>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name" className='my-2'>Name:</label>
      <input className=' form-control ' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} name='name' type="text"  />
      {formik.errors.name &&formik.touched.name ?<div className='alert alert-danger mt-2 p-2'>{formik.errors.name }</div>:""}

      <label htmlFor="email" className='my-2'>Email:</label>
      <input className=' form-control ' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} name='email' type="text"  />
      {formik.errors.email  &&formik.touched.email ?<div className='alert alert-danger mt-2 p-2'>{formik.errors.email }</div>:""}

      <label htmlFor="phone" className='my-2'>Phone:</label>
      <input className=' form-control ' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} name='phone' type="text"  />
      {formik.errors.phone &&formik.touched.phone ?<div className='alert alert-danger mt-2 p-2'>{formik.errors.phone }</div>:""}

      <label htmlFor="password" className='my-2'>password:</label>
      <input className=' form-control ' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} name='password' type="password"  />
      {formik.errors.password &&formik.touched.password ?<div className='alert alert-danger mt-2 p-2'>{formik.errors.password }</div>:""}

      <label htmlFor="rePassword" className='my-2'>rePassword:</label>
      <input className=' form-control ' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.rePassword} name='rePassword' type="password"  />
      {formik.errors.rePassword &&formik.touched.rePassword ?<div className='alert alert-danger mt-2 p-2'>{formik.errors.rePassword }</div>:""}

      {isLoading?      <button className='d-flex btn bg-main text-white mt-2 ms-auto'>
        <i className='fas fa-spinner fa-spin'></i>
      </button>:      <button type='submit' disabled={! (formik.isValid && formik.dirty) } className=' d-flex btn bg-main text-white mt-2 ms-auto '>Register</button>
    }

      </form>
     </div>
    </>
  )
}
