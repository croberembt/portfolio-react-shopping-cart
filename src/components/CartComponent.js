import React, { Component } from 'react';
import { Card, CardHeader, Button, CardBody, CardFooter } from 'reactstrap';
import formatCurrency from '../util'; 

export default class CartComponent extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            showCheckout: false
        }
    }

    handleInput = (event) => {
        this.setState({[event.target.name]: event.target.value});
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
                            <Card>
                                <CardBody>
                                    <Button onSubmit={this.createOrder}>Checkout</Button>
                                    <div>
                                        Email {/* onChange={this.handleInput}*/}
                                    </div>
                                    <div>
                                        Name {/* onChange={this.handleInput}*/}
                                    </div>
                                    <div>
                                        Address {/* onChange={this.handleInput}*/}
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    }
                </div>
            </div>
        ); 
    }
}
