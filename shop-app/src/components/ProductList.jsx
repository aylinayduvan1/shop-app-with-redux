import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slice/productSlice';
import Product from './Product'
import '../css/Product.css'

function ProductList() {
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.product)
    console.log(products);


    useEffect(() => {
        dispatch(getAllProducts())
    }, [])
    return (
        <div className='product-list'>
            <img width={'100%'} src='./src/assets/images/shop-banner.png' />
            {
                products && products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductList
