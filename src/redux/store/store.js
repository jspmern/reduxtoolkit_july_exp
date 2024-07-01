import {configureStore} from '@reduxjs/toolkit'
import counterSlice from '../slice/counterSlice'
import todoSlice from '../slice/todoSlice'
import fetchSlice from '../slice/fetchSlice'
let store =configureStore({
    reducer:{count:counterSlice.reducer,todo:todoSlice.reducer,fetch:fetchSlice.reducer},
    devTools:true
})
export default store