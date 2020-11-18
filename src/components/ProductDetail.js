import React, {Component} from 'react'

class ProductDetail extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return <div className='product-Detail'>
            <h2>{this.props.currentProduct.name}</h2>
            <p>{this.props.currentProduct.seller}</p>
        </div>
    }
}

export default ProductDetail