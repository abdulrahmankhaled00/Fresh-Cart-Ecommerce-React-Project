import { createSlice } from "@reduxjs/toolkit";


const counterSlice= createSlice({
    name:'counter'
    ,initialState:{
        counter:0
    },
    reducers:{
        increment:state=>{
            console.log(state.counter);
            state.counter+=1
        },
        decrement:function(state){
            console.log(state);
            state.counter-=1
        },
        incrementByAmount:(state,action)=>{
            console.log(action);
            state.counter=action.payload
        }

    }   
})

export default counterSlice.reducer

export const{increment,decrement,incrementByAmount}=counterSlice.actions