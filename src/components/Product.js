import React from 'react'

function Product (props) {
    return (
        <div className='product' onClick={() => props.handleChangeIndex(props.index)}>
            <img className='product-preview-image' src={props.product.image} />
            <p>{props.product.name}</p>
        </div>
    )
}

export default Product