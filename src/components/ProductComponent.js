import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardImg, CardFooter } from 'reactstrap';

export default class Products extends Component {
    render() {
        const productList = this.props.products.map(product => {
            return (
                <div key={product._id} className='col-lg-6'>
                    <Card style={{marginBottom: '2rem'}}>
                        <CardBody>
                            <CardHeader className='text-center' style={{color: 'red', fontWeight: 'bold'}}>{product.title}</CardHeader>
                            <CardImg src={product.image} alt={product.description}></CardImg>
                            <CardFooter className='text-center'>{product.description}</CardFooter>
                            <Button color='warning' style={{margin: '1rem'}}>
                                Add To Cart
                            </Button> 
                        </CardBody>
                    </Card>
                </div>
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
