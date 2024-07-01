import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHandler } from './redux/slice/fetchSlice'

function Fetch() {
    let dispatch=useDispatch()
    let {loading,data,error}=useSelector((item)=>{
        return item.fetch
    })
    console.log('loding',loading)
    console.log('error',error)
    console.table(data)
    useEffect(()=>{
       dispatch(fetchHandler())
    },[])
  return (
    <div>Fetch
     
     </div>

  )
}

export default Fetch