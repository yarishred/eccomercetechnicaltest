import React from 'react'

import "./ProductSection.css"

export const ProductSection = ({product}) => {

    const { title, price, thumbnail } = product

    return (
        <div className='product-container'>
            <div className="product-image">
                <img src={thumbnail} alt="" />
            </div>
            <div className="product-description">
                <h2>{title}</h2>
                <p>{title}</p>
                <h3>{`$ ${price} COP`}</h3>
                <br />
                <h4>Quantity</h4>
                <form action="">
                    <input type="number" defaultValue={1} />
                    <input type="submit" value="Add To Cart" />
                </form>
            </div>
        </div>
    )
}
