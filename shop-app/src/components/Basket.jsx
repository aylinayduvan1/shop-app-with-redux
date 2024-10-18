import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromBasket, totalBasketPrice } from '../redux/slice/basketSlice';
import '../css/Basket.css';

function Basket() {

    const { products, totalAmount, drawer } = useSelector((store) => store.basket)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(totalBasketPrice())
    }, [products])


    return (
        <div style={{ padding: '30px 20px' }}>
            <h4>SEPETİNİZ</h4>

            {products && products.map((product) => {
                return (

                    <div key={product.id} style={{ width: '450px', display: 'flex', justifyContent: 'space-between', padding: '30px 0px' }}>
                        <img src={product.image} width={50} height={50} />
                        <p style={{ width: '250px' }}>{product.title} ({product.count})</p>
                        <p style={{ fontWeight: 'bold' }}>{product.price} TL</p>
                        <button onClick={() => dispatch(removeProductFromBasket(product.id))} className=' delete-button'>sil</button>
                    </div>

                )
            })}
            <h5>
                {
                    totalAmount ? `Toplam:${totalAmount}` : <h4 style={{ padding: '20px', width: '450px' }}>sepetteniz boş</h4>
                }
            </h5>
        </div>
    )
}

export default Basket
