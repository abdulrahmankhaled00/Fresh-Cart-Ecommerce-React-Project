import { createContext, useState } from "react";


export const userContext=createContext()

export default function UserContextProvider(props){

    let [token,setToken]=useState(null)

    return <userContext.Provider value={{token,setToken}}>
        {props.children}
    </userContext.Provider>
}