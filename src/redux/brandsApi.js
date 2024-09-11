import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

    export const allBrndsApi =createAsyncThunk('brandsApi/getAllBrands',async()=>{
        const {data}= await axios.get('https://ecommerce.routemisr.com/api/v1/brands')
        console.log(data);
        return data
        
    })


const brandsApi =createSlice({
    name:"brandsApi",
    initialState:{
        brands:[],
        isLoading:false,
        isErr:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(allBrndsApi.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isErr=false
            state.brands=action.payload.data
            
        }).addCase(allBrndsApi.pending,(state,action)=>{
            state.isLoading=true
            console.log('is pending');
            console.log(action);

            
        }).addCase(allBrndsApi.rejected,(state,action)=>{
            state.isLoading=false
            state.isErr=true
            console.log(action);

        })
    }
})

export default brandsApi.reducer