// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    const {ratings,name,img,seller,price}=props.product;
    const handleToAddCart=props.handleToAddCart;

   
    return (
        <div className='product'>
            
            <div className="protuct-style">
            <img src={img} alt="" />
            <h6>{name}</h6>
            <p>Price: ${price}</p>
            <p>Manufacruy: {seller}</p>
            <p>Rating: {ratings}</p>
            </div>

            <div>
                <button onClick={ ()=>handleToAddCart(props.product)} className='btn-cartStyle'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /> </button>
            </div>
        </div>
        
    );
};

export default Product;