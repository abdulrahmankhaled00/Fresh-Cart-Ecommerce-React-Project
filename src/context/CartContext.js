import axios from "axios";
import { createContext, useState } from "react";


export const cartContext=createContext()

export default function CartContextProvider(props){

    let headers={
        token:localStorage.getItem('token')
    }
    let[cartItemsQountity,setCartItemsQountity]=useState(0)

    function addToCart(id){

        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
        productId:id
        },
    {
        headers
    }).then((resp)=>resp).catch((err)=>err)
    }
    function updateCartProduct(id,count){
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
            count
        },
    {
        headers
    }).then((resp)=>resp).catch((err)=>err)
    }
    function deleteCartProduct(id){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {
        headers
    }).then((resp)=>resp).catch((err)=>err)
    }
    function clearCartProducts(){
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
        headers
    }).then((resp)=>resp).catch((err)=>err)
    }
    function allCartProducts(){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
        headers
    }).then((resp)=>resp).catch((err)=>err)
    }
    
    return <cartContext.Provider value={{allCartProducts,addToCart,updateCartProduct,deleteCartProduct,clearCartProducts,setCartItemsQountity,cartItemsQountity}}>
        {props.children}
    </cartContext.Provider>
}