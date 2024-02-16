
import { createApi } from '@reduxjs/toolkit/query'

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from '@reduxjs/toolkit/query/react'



import { configureStore } from "@reduxjs/toolkit";    
import cartReducer from "./cardSlice"

const appStore = configureStore({
    reducer : {
      cart: cartReducer,
      
    },
});

export default appStore;