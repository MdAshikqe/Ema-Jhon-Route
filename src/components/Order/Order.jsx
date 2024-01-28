import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import ReviewOrder from '../Review-order/ReviewOrder';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const saveCart= useLoaderData()
    const [cart, setCart]=useState(saveCart)

   
    const handleRemoveingCart=(id)=>{
        const remaing=cart.filter(product => product.id !== id)
        setCart(remaing);
        removeFromDb(id);
    }
    const handleClearCart=()=>{
        setCart([])
        deleteShoppingCart()

    }
    
    return (
        <div className='shop-container'>
            <div className='order-review'>
            {
                saveCart.map(product=> <ReviewOrder 
                    key={product.id}
                    product={product}
                    handleRemoveingCart={handleRemoveingCart}

                ></ReviewOrder>)
            }
            </div>
            <div >
                <Cart 
                
                cart={saveCart}
                handleClearCart={handleClearCart}
                >
                    <div>
                    <Link to='/procedure'><button className='review-order-btn'>Procedure CheckOut</button></Link>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default Order;