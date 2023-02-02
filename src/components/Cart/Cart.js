import React from 'react';
import './Cart.css';

const Cart = ({cart}) => { 

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = (total * 0.1).toFixed(2);
    const grandTotal = (total + shipping + parseFloat(tax)).toFixed(2);
    return (
        <div className='cartCompo-container'>
            <h4>order summery</h4>
            <p>selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
        </div>
    );
};

export default Cart;