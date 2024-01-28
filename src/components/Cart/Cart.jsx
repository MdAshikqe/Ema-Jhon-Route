import React from 'react';
import './Cart.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cart = ({cart, handleClearCart,children}) => {
    
    

    let totalPrice=0;
    let totalShiping=0;
    let quintity=0;
    for(const product of cart ){
        product.quantity=product.quintity ||1;
         totalPrice=totalPrice+product.price * product.quantity;
         totalShiping=totalShiping+product.shipping;
         quintity=quintity + product.quantity;
    }
    const tax=totalPrice*10/100;
    const granTotal=totalPrice+totalShiping+tax;
    return (
        <div className='cart-container'> 
            <h2>Order Summmary</h2>
            <p>Selected Items:{quintity}</p>
            <p>Total-Price: ${totalPrice}</p>
            <p>Total Shiping Charge: ${totalShiping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${granTotal.toFixed(2)}</h6>

            <button onClick={handleClearCart} className='btn-Clear-Cart'>
                <span>Clear Cart</span>
            <FontAwesomeIcon  icon={faTrashAlt} />

            </button>
            {
                children
            }
            

        </div>
    );
    
};

export default Cart;