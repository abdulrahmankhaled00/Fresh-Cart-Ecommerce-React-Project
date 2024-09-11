/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";


export let counterContext=createContext()

export default function CounterContextProvider(props){

    let [counter,setCounter]= useState(100)

    function changeNumber(){                
        setCounter(Math.random())
    }

    return <counterContext.Provider value={{counter,changeNumber}}>
        {props.children}
    </counterContext.Provider>
}