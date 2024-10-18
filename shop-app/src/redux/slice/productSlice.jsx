import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const getProductFromStorage = () => {
    if (localStorage.getItem("products")) {
        return JSON.parse(localStorage.getItem("products"))
    }
    return [];
}
const initialState = {
    products: getProductFromStorage(),
    selectedProduct: {},
    loading: false
}
const BASE_URL = 'https://fakestoreapi.com'

export const getAllProducts = createAsyncThunk(
    "getAllProducts", async () => {
        const response = await axios.get(`${BASE_URL}/products`)
        return response.data;
    }
)

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getAllProducts.fulfilled, (state, actions) => {
            state.loading = false;
            state.products = actions.payload

            // Ürünleri localStorage'a kaydetme
            localStorage.setItem('products', JSON.stringify(state.products));
        })
    }
})

export const { setSelectedProduct } = productSlice.actions
export default productSlice.reducer
