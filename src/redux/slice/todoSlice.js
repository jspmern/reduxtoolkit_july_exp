import { createSlice } from "@reduxjs/toolkit";
let initalValue={
    text:'',
    todo:[]
}
let todoSlice=createSlice({
    name:"todo",
    initialState:initalValue,
    reducers:{
        setText(state,action){
            state.text=action.payload
        },
        addText(state,action){
            let obj={
                id:new Date().getMilliseconds(),
                msg:state.text
            }
            state.todo=[...state.todo,obj]
            state.text=''
        },
        deleteText(state,action){
            state.todo=state.todo.filter((item)=>item.id !=action.payload)
        }
    }
})
export let {setText,addText,deleteText}=todoSlice.actions
export default todoSlice