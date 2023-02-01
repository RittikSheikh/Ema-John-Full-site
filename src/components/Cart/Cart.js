import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    return (
        <div className='cartCompo-container'>
            <h4>order summery</h4>
            <p>selected Items: {cart.length}</p>
            <p>Total Price: $</p>
            <p>Total Shipping Charge: $</p>
            <p>Tax: $</p>
            <h4>Grand Total: $</h4>
        </div>
    );
};

export default Cart;