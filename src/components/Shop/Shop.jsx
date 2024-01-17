// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const [cart,setCart]=useState([])

    const handleToAddCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)

    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleToAddCart={handleToAddCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <div className='sumaryStyle'>
                <Cart cart={cart}></Cart>
                </div>
            </div>


        </div>
    );
};

export default Shop;