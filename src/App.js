import React from "react";
import {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0);
   const increas = ()=>{
     setCount (previuse =>{
       return previuse + 1
     })
     console.log({increaseCount:count})
   } 
  
   const decreas = ()=>{
    setCount (previuse => {
      return previuse - 1
    })
    console.log({decreaseCount:count})
  } 

  const reset = ()=>{
    setCount (0)
    console.log('reset')
  }
  return(
    <>
    <h1>count :  {count}</h1>
       
       <button onClick={decreas}>-</button>
      <button onClick={increas}>+</button>
      <button onClick={reset}>reset</button>
    </>
    )
    }
export default Counter;