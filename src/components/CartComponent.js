import React, { Component } from 'react';
import { Card, CardHeader, Button, CardBody, CardFooter } from 'reactstrap';
import formatCurrency from '../util'; 
import Fade from 'react-reveal/Fade';

export default class CartComponent extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            name: '',
            email: '',
            address: '',
            showCheckout: false
        }
    }

    handleInput = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    createOrder = event => {
        event.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        };
        this.props.createOrder(order); 
        alert(this.state);
    }

    render() {
        const cartList = this.props.cartItems.map(item => {
            return (
                <div key={item._id} className='cart-depiction'>
                    <Card>
                        <div className='row'>
                            <div className='col'>
                                <div className='media'>
                                    <img className='mr-3' src={item.image} alt={item.description}></img>
                                    <div className='media-body' style={{marginTop: '.5rem', marginRight: '.5rem'}}>
                                        <p><a href='#'>{item.title}</a></p>
                                        <p>{formatCurrency(item.price)} x {item.count}</p>
                                    </div>
                                </div>
                                <Button onClick={() => this.props.removeFromCart(item)} color='danger' style={{fontWeight: 'bold', marginBottom: '.5rem'}}>
                                    Remove
                                </Button> 
                            </div>
                        </div>
                    </Card>
                </div>
            );
        }); 

        return (
            <Fade top>
                <div>
                    <div>
                        {
                        this.props.cartItems.length === 0 ? <Card><CardHeader className='cart-empty'>Your cart is empty, add some cheer!</CardHeader></Card> : 
                        this.props.cartItems.length === 1 ? <Card><CardHeader className='cart-full'> You have {this.props.cartItems.length} decoration in your cart!</CardHeader></Card> : 
                        <Card><CardHeader className='cart-full'>You have {this.props.cartItems.length} decorations in your cart!</CardHeader></Card>
                        }
                    </div>
                    <div>
                        {cartList}
                    </div>
                    <div>
                        {
                            this.props.cartItems.length >= 1 ? 
                            <div>
                                <Card className='total-price'>
                                    <CardBody>
                                        <CardHeader>
                                            Total Price: {formatCurrency(this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0))}
                                        </CardHeader>
                                        <CardFooter>
                                            <Button onClick={() => {this.setState({showCheckout: true})}} color='success' style={{fontWeight: 'bold'}}>
                                                Proceed
                                            </Button>
                                        </CardFooter>
                                    </CardBody>
                                </Card>
                            </div> :
                            <div></div>
                        }
                    </div>
                    <div>
                        {
                            this.state.showCheckout && 
                            (
                                <Fade bottom>
                                    <Card>
                                        <form onSubmit={this.createOrder}>
                                            <div className='container'>
                                                <div className='row'>
                                                    <div className='col-8'>
                                                        <input name='email' type='email' required className='form-control' placeholder='Email' onChange={this.handleInput}></input>
                                                    </div>
                                                    <div className='col-4'></div>
                                                    <div className='col-8'>
                                                        <input name='name' type='text' required className='form-control' placeholder='Name' onChange={this.handleInput}></input>
                                                    </div>
                                                    <div className='col-4'></div>
                                                    <div className='col-8'>
                                                        <input name='address' type='text' required className='form-control' placeholder='Address'  onChange={this.handleInput}></input>
                                                    </div>
                                                    <div className='col-4'></div>
                                                    <div className='col-12'>
                                                        <Button color='success' style={{fontWeight: 'bold', marginTop: '.5rem', marginBottom: '.5rem'}}>Checkout</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </Card>
                                </Fade>
                            )
                        }
                    </div>
                </div>
            </Fade>
        ); 
    }
}
