import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
import brandsreducer from './brandsApi.js';
import categoriesreducer from './categories.js';
import wishListreducer from './wishListSlice.js';
import ordarsreducer from './ordars.js';


const store =configureStore({
    reducer:{
        counter: counterReducer,
        brandsApi:brandsreducer,
        categoriesApi:categoriesreducer,
        wishList:wishListreducer,
        ordars:ordarsreducer
    }
})

export default store