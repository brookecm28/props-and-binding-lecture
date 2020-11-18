import React, {Component} from 'react'
import products from '../data.json' //this is just the array of products
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'

class ProductContainer extends Component {
    constructor () {
        super()
        this.state = {
            currentIndex: 0
        }
        this.handleChangeIndex = this.handleChangeIndex.bind(this)
    }

    handleChangeIndex(newIndex) {
        this.setState ({
            currentIndex: newIndex
        })
    }

    render () {
        return (
        <div className='product-container'>
        <ProductDetail currentProduct={products[this.state.currentIndex]}/> 
        <ProductList products={products} handleChangeIndex={this.handleChangeIndex}/>
        </div>
        
        )
    }
}


export default ProductContainer