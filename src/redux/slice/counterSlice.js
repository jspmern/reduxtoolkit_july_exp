import { createSlice } from "@reduxjs/toolkit";
let initalValue={
    inc:1,
    dec:10
}
let counterSlice=createSlice({
    name:"counter",
     initialState: initalValue,
    reducers:{
        incrementHandler(state,action){
             state.inc=state.inc+action.payload
        },
        decrementHandler(state,action){
            state.dec=state.dec-action.payload
        }
    }
})
export let {incrementHandler,decrementHandler}=counterSlice.actions
export default counterSlice;