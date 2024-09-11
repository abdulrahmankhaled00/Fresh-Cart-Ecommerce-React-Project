import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const addToWishList = createAsyncThunk('wishList/addToWishList', async (productId) => {
    
    const headers = {
        token: localStorage.getItem('token')
    }
    const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
        productId
    },
        {
            headers
        })
    return data

})
export const deleteFromWishList = createAsyncThunk('wishList/deleteFromWishList', async (productId) => {
    
    const headers = {
        token: localStorage.getItem('token')
    }
    const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
        {
            headers
        })
    return data

})

export const getWishList = createAsyncThunk('wishList/getWishList', async () => {
        
    const headers = {
        token: localStorage.getItem('token')
    }
    const {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
        headers
    })
    
    return data

})


const wishListSlice = createSlice({
    name: 'wishList',
    initialState: {
        List: [],
        data:[],
        isloading: false,
        isErr: false,
    },
    extraReducers: builder => {
        builder.addCase(addToWishList.fulfilled,(state,action)=>{
            state.isloading=false
            state.isErr=false
            state.List=action.payload.data
            console.log(state.List);
            
        }).addCase(addToWishList.pending,(state,action)=>{
            state.isloading=true
            state.isErr=false            
        }).addCase(addToWishList.rejected,(state,action)=>{
            state.isloading=false
            state.isErr=true            
        })
        
        builder.addCase(deleteFromWishList.fulfilled,(state,action)=>{
            state.isloading=false
            state.isErr=false
            state.List=action.payload.data
            console.log(state.List);
            
        }).addCase(deleteFromWishList.pending,(state,action)=>{
            state.isloading=true
            state.isErr=false            
        }).addCase(deleteFromWishList.rejected,(state,action)=>{
            state.isloading=false
            state.isErr=true            
        })

        builder.addCase(getWishList.fulfilled,(state,action)=>{
            state.isloading=false
            state.isErr=false
            state.data=action.payload.data
            state.List=action.payload.data.map((product)=>product.id)
            console.log(state.data);
            
            
        }).addCase(getWishList.pending,(state,action)=>{
            state.isloading=true
            state.isErr=false            
        }).addCase(getWishList.rejected,(state,action)=>{
            state.isloading=false
            state.isErr=true            
        })

    }
})

export default wishListSlice.reducer