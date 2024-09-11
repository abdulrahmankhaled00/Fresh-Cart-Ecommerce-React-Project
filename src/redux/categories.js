import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

    export const allcategoriesApi =createAsyncThunk('categoriesApi/getAllcategories',async()=>{
        const {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
        console.log(data);
        return data
        
    })


const categoriesApi =createSlice({
    name:"categoriesApi",
    initialState:{
        categories:[],
        isLoading:false,
        isErr:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(allcategoriesApi.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isErr=false
            state.categories=action.payload.data
            
        }).addCase(allcategoriesApi.pending,(state,action)=>{
            state.isLoading=true
            console.log('is pending');
            console.log(action);

            
        }).addCase(allcategoriesApi.rejected,(state,action)=>{
            state.isLoading=false
            state.isErr=true
            console.log(action);

        })
    }
})

export default categoriesApi.reducer