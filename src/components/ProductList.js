import React from 'react'
import Product from './Product'


function ProductList (props) {
    console.log(props.products)

    const mappedProducts=props.products.map((element, index) => {
        return <Product 
        product={element} 
        index ={index} 
        handleChangeIndex={props.handleChangeIndex}/> 
    }
    )




    return (
        <div className='product-list'>{mappedProducts}</div>
    )
}

export default ProductList
