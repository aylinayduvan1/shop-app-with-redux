import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedProduct } from '../redux/slice/productSlice';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import '../css/Product.css';  // CSS dosyasını ekle
import { addToBasket } from '../redux/slice/basketSlice';


function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { price, title, description, image } = selectedProduct;
    const dispatch = useDispatch();
    const [count, setCount] = useState(0)

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })
    }

    const addBasket = () => {
        const payload = {
            id,
            title,
            price,
            image,
            description,
            count
        }
        dispatch(addToBasket(payload))
    }

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='flex-column  mt-5'>
            <div className="card detail-container col-12 flex-row" style={{ height: '70vh', backgroundColor: '#193441' }}>
                <div className="col-5" style={{ display: 'flex', justifyContent: 'center' }}>
                    <img style={{ width: '60%', objectFit: 'contain', borderRadius: '18px' }} src={image} />
                </div>
                <div className="col-7">
                    <h6 style={{ width: '90%', color: '#fff' }}>{title}</h6>
                    <p style={{ width: '85%', color: '#fff' }}>{description}</p>
                    <h4 style={{ color: '#F59914' }}>{price} TL</h4>
                    <div className='circle'>
                        <CiCirclePlus onClick={increment} />
                        <span>{count}</span>
                        <CiCircleMinus onClick={decrement} />
                    </div>

                    <div>
                        <button onClick={addBasket} type="button" className="btn btn-warning mt-3" style={{ backgroundColor: '#F59914' }}>Sepete Ekle</button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetails
