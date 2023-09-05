import { useState } from "react"
import Child from "./Child"
export default function Parent(){
    const[parentcount,setParentCount]=useState(0)
    const[childcount,setChildCount]=useState(0) 
    const changeParentCount=()=>{
        setParentCount(parentcount+1)
    } 
    const changeChildCount=()=>{
        setChildCount(childcount+1)
    } 
    return(
        <div>
            This is parent
            <h1>Parent count is:{parentcount}</h1>
            <Child count={childcount}></Child>
            <button onClick={changeParentCount}>add parent</button>
            <button onClick={changeChildCount}>add child</button>
        </div>
    )
}