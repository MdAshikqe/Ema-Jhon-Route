import React from 'react';
import './ReviewOrder.css'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ReviewOrder = ({product,handleRemoveingCart}) => {
    const {name,img,quantity,price,id}= product;
    
    return (
        <div className='review-order'>
            <img src={img} alt="" />
           
            <div className='review-details'>
                <p>{name}</p>
                <p>Price: <span className='order-color'>${price}</span></p>
                <p>Quintity: <span className='order-color'>{quantity}</span></p>
            </div>
            
                <button onClick={()=> handleRemoveingCart(id)} className='btn-delete'><FontAwesomeIcon className='delet-icon' icon={faTrashAlt} /></button>
            
            
        </div>
    );
};

export default ReviewOrder;