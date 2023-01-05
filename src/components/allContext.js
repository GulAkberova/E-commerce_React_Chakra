import { createContext, useState } from "react";

export const allContext=createContext(null)

export const AllProvider=({children})=>{
    const [zero,setZero]=useState(0)

    const [basket, setBasket] = useState(false)

    const values={
        zero,
        setZero,
        basket,
        setBasket,
    }
    return (<allContext.Provider value={values}>
        {children}
    </allContext.Provider>)

}