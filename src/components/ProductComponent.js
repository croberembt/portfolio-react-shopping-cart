import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardImg, CardFooter, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import formatCurrency from '../util'; 
import Fade from 'react-reveal/Fade';

export default class ProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state= {
            product: null
        };
    }

    openModal = (product) => {
        this.setState({product}); 
    }

    closeModal = () => {
        this.setState({product: null});
    }

    render() {
        const {product} = this.state;
        const productList = this.props.products.map(product => {
            return (
                <Fade bottom>
                    <div key={product._id} className='col-md-6'>
                        <Card style={{marginBottom: '2rem'}}>
                            <CardBody>
                                <CardHeader className='text-center product-title'><a href='#' onClick={() => this.openModal(product)}>{product.title}</a></CardHeader>
                                <CardImg onClick={() => this.openModal(product)} src={product.image} alt={product.description}></CardImg>
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
                <div className='row'>
                    {product && ( 
                        <div className='col-md-6'> 
                            <Modal className='text-center product-title' isOpen={true} onRequestClose={this.closeModal}>
                                <ModalBody>
                                    <ModalHeader onClick={this.closeModal}>{product.title}</ModalHeader>
                                    <CardImg onClick={this.toggleModal} src={product.image} alt={product.description}></CardImg>
                                    <ModalFooter>
                                        <p>{product.description}</p>
                                        <p>{formatCurrency(product.price)}</p>
                                    </ModalFooter>
                                    <Button onClick={() => {this.props.addToCart(product); this.closeModal()}}  color='warning' style={{margin: '1rem'}}>
                                        Add To Cart
                                    </Button> 
                                </ModalBody>
                            </Modal>
                        </div> 
                    )}
                </div>
            </div>
        );
    }
}
