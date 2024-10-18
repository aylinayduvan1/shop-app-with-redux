import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slice/appSlice'
import productReducer from '../redux/slice/productSlice'
import basketReducer from '../redux/slice/basketSlice'



export const store = configureStore({
    reducer: {
        app: appReducer,
        product: productReducer,
        basket: basketReducer
    },
})