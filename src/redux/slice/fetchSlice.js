import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//this is for initalValue
let initalValue={
    loading:false,
    data:[],
    error:''
}
//this is for handling fetchAction
export let fetchHandler=createAsyncThunk('fetch/allData',async()=>{
   try {
     let res= await fetch('https://jsonplaceholder.typicode.com/users')
     let data= await res.json()
     return data
   } catch (error) {
        return error
   }
})
let fetchSlice=createSlice({
    name:"fetch",
    initialState:initalValue,
    reducer:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchHandler.pending,(state)=>{
            state.loading=true
        }).addCase(fetchHandler.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
        }).addCase(fetchHandler.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        })
    }
})
export default fetchSlice