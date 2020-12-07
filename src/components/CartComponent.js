import React, { Component } from 'react';
import { Card, CardHeader } from 'reactstrap';

export default class CartComponent extends Component {
    render() {
        return (
            <div>
                {this.props.cartItems.length === 0 ? <Card><CardHeader className='cart-empty'>Your cart is empty, add some cheer!</CardHeader></Card> : 
                this.props.cartItems.length === 1 ? <Card><CardHeader className='cart-full'> You have {this.props.cartItems.length} decoration in your cart!</CardHeader></Card> : 
                <Card><CardHeader className='cart-full'>You have {this.props.cartItems.length} decorations in your cart!</CardHeader></Card>}
            </div>
        ); 
    }
}
