import React, { Component } from 'react';
import { Card, CardHeader, Image, Button } from 'reactstrap';
import formatCurrency from '../util'; 

export default class CartComponent extends Component {
    render() {
        const cartList = this.props.cartItems.map(product => {
            return (
                <div key={product._id} className='cart-depiction'>
                    <Card>
                        <div className='row'>
                            <div className='col'>
                                <div className='media'>
                                    <img class='mr-3' src={product.image} alt={product.description}></img>
                                    <div className='media-body' style={{marginTop: '.5rem', marginRight: '.5rem'}}>
                                        <p><a href='#'>{product.title}</a></p>
                                        <p>{formatCurrency(product.price)}</p>
                                    </div>
                                </div>
                                <Button onClick={() => this.props.removeFromCart(product)} color='danger' style={{fontWeight: 'bold', marginBottom: '.5rem'}}>
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
                    {this.props.cartItems.length === 0 ? <Card><CardHeader className='cart-empty'>Your cart is empty, add some cheer!</CardHeader></Card> : 
                    this.props.cartItems.length === 1 ? <Card><CardHeader className='cart-full'> You have {this.props.cartItems.length} decoration in your cart!</CardHeader></Card> : 
                    <Card><CardHeader className='cart-full'>You have {this.props.cartItems.length} decorations in your cart!</CardHeader></Card>
                    }
                </div>
                <div style={{marginBottom: '1rem'}}>
                    {cartList}
                </div>
            </div>
        ); 
    }
}
