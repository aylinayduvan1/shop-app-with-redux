import React, { useEffect } from 'react'
import '../css/Header.css'
import logo from '../assets/images/shop-logo.png';

import { BsBasket } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { drawerState } from '../redux/slice/basketSlice';

function Header() {
    const { selectedProduct } = useSelector((store) => store.product)
    const { products } = useSelector((store) => store.basket)
    const dispatch = useDispatch();


    useEffect(() => {
        console.log(selectedProduct);
    }, [])

    return (
        <div className='header-container'>
            <div className='header-navbar' >
                <div>
                    <img style={{ borderRadius: '50%' }} className='logo' src={logo} alt="Shop Logo" />
                </div>
                <div className='flex-row'>
                    <input className='search-input' type='text' placeholder='Arama Yapınız..' />
                    <div style={{ padding: '3px 10px' }}>

                        <Badge badgeContent={products.length} color="error">
                            <BsBasket onClick={() => dispatch(drawerState())} className='icon' />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
