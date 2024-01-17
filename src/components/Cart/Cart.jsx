import React from 'react';

const Cart = (props) => {
    const {cart}=props;
    console.log(cart)

    let totalPrice=0;
    for(const product of cart ){
         totalPrice=totalPrice+product.price;
    }
    return (
        <div>
            <h2>Order Summmary</h2>
            <p>Selected Items:{cart.length}</p>
            <p>Total-Price: {totalPrice}</p>
        </div>
    );
};

export default Cart;