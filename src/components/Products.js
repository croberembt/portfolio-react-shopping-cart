import React, { Component } from 'react';
import { Button, Card } from 'reactstrap';

export default class Products extends Component {
    render() {
        return (
            <div>
                <Card className='products'>
                    {this.props.products.map(product => (
                        <div key={product._id}>
                            <div className='product'>
                                <a href={'#' + product._id}>
                                    <img src={product.image} alt={product.description}></img>
                                    <p>
                                        {product.title}
                                    </p>
                                </a>
                                <div className='product-price'>
                                    <div>
                                        {product.price}
                                    </div>
                                </div>
                                <Button color='warning'>
                                    Add To Cart
                                </Button> 
                            </div>
                        </div>
                    ))}
                </Card>
            </div>
        )
    }
}
