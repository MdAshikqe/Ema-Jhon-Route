// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart= getShoppingCart();
        const saveCart=[];
        //step-1 Get id in storedcart
        for(const id in storedCart){

            //step 2.. get product in Id
                const addedProduct=products.find(product =>product.id === id);

                // step.3-- get quintity of the product
                if(addedProduct){
                        const quintity=storedCart[id];
                    addedProduct.quintity=quintity;
                    //step-4 push the savaCart 
                    saveCart.push(addedProduct);
                    
                }

        }
        //step 5-- set the cart
        setCart(saveCart)

        //decler product in arry
    },[products])


    const [cart,setCart]=useState([])
    
    const handleToAddCart=(product)=>{
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.id)

    }
    const handleClearCart=()=>{
        setCart([])
        deleteShoppingCart()
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
            <div>
                
                <Cart
                handleClearCart={handleClearCart}
                 cart={cart}>
                    <div>
                    <Link  to='/order'><button className='review-order-btn'>Order Review</button></Link>
                    </div>
                 </Cart>
                
            </div>


        </div>
    );
};

export default Shop;