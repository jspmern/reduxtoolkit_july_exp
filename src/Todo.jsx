import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addText, deleteText, setText } from './redux/slice/todoSlice'

function Todo() {
   let {text,todo}= useSelector((item)=>item.todo)
    let dispatch=useDispatch()
    //submitHandler
    function submitHandler()
    {
      dispatch(addText())
    }
    //this is for the text handler
    function textHandeler(e)
    {
      dispatch(setText(e.target.value))
    }
  return (
     <>
     <input type='text' placeholder='enter your name' onChange={textHandeler} value={text}/>
     <button onClick={submitHandler}>submit</button>
     {
        todo.length>0 && todo.map((item)=>{
            return <div>
                <h1>{item.msg}</h1>
                <button onClick={()=>{
                    dispatch(deleteText(item.id))
                }}>del</button>
            </div>
        })
     }
     </>
  )
}

export default Todo