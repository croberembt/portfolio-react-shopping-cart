import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardImg, CardFooter, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import formatCurrency from '../util'; 
import Fade from 'react-reveal/Fade';
import {connect} from 'react-redux'; 
import {fetchProducts} from '../actions/productActions'; 

class ProductComponent extends Component {

    constructor(props) {
        super(props);
        this.state= {
            product: null
        };
    }

    componentDidMount() {
        this.props.fetchProducts(); 
    }

    openModal = (product) => {
        this.setState({product}); 
    }

    closeModal = () => {
        this.setState({product: null});
    }

    render() {
        const {product} = this.state;
        return (
            <div className='container'>
                <div className='row'>
                    <Fade bottom>
                        {
                            !this.props.products ? (<div style={{fontWeight: 'bold', color: 'white'}}>Loading...</div>) :
                            <div className='row'>
                                {this.props.products.map(product => 
                                    <div className='col-md-6'> 
                                        <Card key={product._id} style={{marginBottom: '2rem'}}>
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
                                )}
                            </div>
                        }
                    </Fade>
                </div>
                <div className='row'>
                    {product && ( 
                        <div> 
                            <Modal className='product-title' isOpen={true} onRequestClose={this.closeModal}>
                                <ModalBody>
                                    <Button className='float-right' onClick={() => this.closeModal()}>x</Button>
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

export default connect((state) => ({products: state.products.items}), {fetchProducts,}) (ProductComponent); 
