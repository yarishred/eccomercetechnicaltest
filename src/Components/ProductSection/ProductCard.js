import React from 'react'

import "./ProductCard.css"

export const ProductCard = ({title, price, thumbnail, currency_id}) => {
    return (
        <div className='card_product-container'>
            <div className='card-image' >
                <img src={thumbnail} alt={title} />
            </div>
            <div className='card-description'>
                <h5>{title}</h5>
                <h3>{`$ ${price} ${currency_id}`}</h3>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    )
}
