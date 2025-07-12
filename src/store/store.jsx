import { configureStore,  } from '@reduxjs/toolkit'
import UserSlice from "./reducer/UserSlice"
import ProductSlice from './reducer/ProductSlice'
const store =configureStore({
    reducer:{
        users:UserSlice,
        products:ProductSlice,
    }
 
})

export default store