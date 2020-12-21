import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardImg, CardFooter, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import formatCurrency from '../util'; 
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default class ProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state= {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        const productList = this.props.products.map(product => {
            return (
                <Fade bottom>
                    <div key={product._id} className='col-md-6'>
                        <Card style={{marginBottom: '2rem'}}>
                            <CardBody>
                                <CardHeader className='text-center product-title'><a href='#' onClick={this.toggleModal}>{product.title}</a></CardHeader>
                                <CardImg onClick={this.toggleModal} src={product.image} alt={product.description}></CardImg>
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
                    {
                        <div className='col-md-6'>
                            <Modal className='text-center product-title' isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                <ModalBody>
                                    <ModalHeader toggle={this.toggleModal}>{this.props.product.title}</ModalHeader>
                                    <CardImg onClick={this.toggleModal} src={this.props.product.image} alt={this.props.product.description}></CardImg>
                                    <ModalFooter>
                                        <p>{this.props.product.description}</p>
                                        <p>{formatCurrency(this.props.product.price)}</p>
                                    </ModalFooter>
                                    <Button onClick={() => this.props.addToCart(product)}  color='warning' style={{margin: '1rem'}}>
                                        Add To Cart
                                    </Button> 
                                </ModalBody>
                            </Modal>
                        </div> 
                    }
                </div>
            </div>
        );
    }
}
