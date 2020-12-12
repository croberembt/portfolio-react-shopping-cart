import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardImg, CardFooter } from 'reactstrap';
import formatCurrency from '../util'; 
import Fade from 'react-reveal/Fade';

export default class ProductComponent extends Component {
    render() {
        const productList = this.props.products.map(product => {
            return (
                <Fade bottom>
                    <div key={product._id} className='col-md-6'>
                        <Card style={{marginBottom: '2rem'}}>
                            <CardBody>
                                <CardHeader className='text-center product-title'><a href='#'>{product.title}</a></CardHeader>
                                <CardImg src={product.image} alt={product.description}></CardImg>
                                <CardFooter>
                                    <p>{product.description}</p>
                                    <p>{formatCurrency(product.price)}</p>
                                </CardFooter>
                                <Button onClick={() => this.props.addToCart(product)} color='warning' style={{margin: '1rem'}}>
                                    Add To Cart
                                </Button> 
                            </CardBody>
                        </Card>
                    </div>
                </Fade>
            );
        });

        return (
            <div className='container'>
                <div className='row'>
                    {productList}
                </div>
            </div>
        );
    }
}
