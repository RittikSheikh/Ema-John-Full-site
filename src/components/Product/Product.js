import React from 'react';

const Product = ({product}) => {
    const {img,seller,ratings,price,name} = product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div>
                <p>Name: {name}</p>
                <p>price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>ratings: {ratings}</small></p>
            </div>

        </div>
    );
}