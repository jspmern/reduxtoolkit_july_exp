import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementHandler, incrementHandler } from './redux/slice/counterSlice'

function Counter() {
    let dispatch=useDispatch()
    let {inc,dec}=useSelector((item)=>{
        return item.count
    })
      function increment()
      {
        dispatch(incrementHandler(1))
      }
      function decrement()
      {
        dispatch(decrementHandler(2))
      }
  return (
       <>
       <h1>inc:{inc}    dec:{dec}</h1>
       <button onClick={increment}>inc</button>
       <button onClick={decrement}>dec</button>
       
       </>
  )
}

export default Counter