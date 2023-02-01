import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ({product,handle}) => {
    const {img,seller,ratings,price,name} = product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>Name: {name}</p>
                <p>price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>ratings: {ratings}</small></p>
            </div>
            <button className='addToCart-btn' onClick={()=>handle(product)}>
                <p className='btn-text'>add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;