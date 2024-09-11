import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const checkoutOnlinePayment = createAsyncThunk('ordars/checkoutOnlinePayment',async( cartId,shippingAddress)=>{
    let headers={
        token :localStorage.getItem('token')
    }
    let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,{
        shippingAddress
    },{
        headers
    })
    return data
    
 })
export const userOrdars = createAsyncThunk('ordars/userOrdars',async()=>{
    const decoded = jwtDecode(localStorage.getItem('token'));

    let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${decoded.id}`)
    return data
    
 })

const ordarsSlice=createSlice({
    name:'ordars',
    initialState:{
        isloading:false,
        isErr:false,
        url:'',
        data:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(checkoutOnlinePayment.fulfilled,(state,action)=>{
            state.isloading=false
            state.isErr=false
            state.url=action.payload.session.url
            
        }).addCase(checkoutOnlinePayment.pending,(state,action)=>{
            state.isloading=true
            state.isErr=false

            
        }).addCase(userOrdars.rejected,(state,action)=>{
            state.isloading=false
            state.isErr=true
        })
        builder.addCase(userOrdars.fulfilled,(state,action)=>{
            state.isloading=false
            state.isErr=false
            state.data=action.payload
            console.log(state.data);
            
            
        }).addCase(userOrdars.pending,(state,action)=>{
            state.isloading=true
            state.isErr=false

            
        }).addCase(checkoutOnlinePayment.rejected,(state,action)=>{
            state.isloading=false
            state.isErr=true
        })
    }
})

export default ordarsSlice.reducer