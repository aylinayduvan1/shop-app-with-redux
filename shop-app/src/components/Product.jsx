import React from 'react';
import { BsBasket } from "react-icons/bs";
import '../css/Product.css';  // CSS dosyasını ekle
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { BiMessageRoundedDetail } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'
import { addToBasket } from '../redux/slice/basketSlice';
import { useDispatch } from 'react-redux';

function Product({ product }) {
    const { id, title, price, image, rating } = product;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addBasket = () => {
        const payload = {
            id,
            title,
            price,
            image,
            count: 1
        }
        dispatch(addToBasket(payload))
    }

    return (
        <div className="card product-card">
            <div className="product-container">
                <img className='product-image' src={image} alt={title} />
            </div>
            <div className="card-body">
                <p className='title'>{title}</p>
                <div style={{ display: 'flex' }}>
                    <Box sx={{ '& > legend': { mt: 2 } }}>
                        <Rating name="read-only" value={rating.rate} readOnly />
                    </Box>
                    <p style={{ marginLeft: '12px', color: 'gray' }}> ({rating.count})</p>
                </div>
                <h5>${price}</h5>
            </div>
            <div className="icons"> {/* Hover durumda ikonların görünmesi için */}
                <BiMessageRoundedDetail onClick={() => navigate("/product-details/" + id)} className="icon" />
                <BsBasket onClick={addBasket} className="icon" />
            </div>

        </div>
    );
}

export default Product;
