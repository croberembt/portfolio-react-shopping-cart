import React, { Component } from 'react';

export default class CartComponent extends Component {
    render() {
        return (
            //<div>
               // {this.props.cartItems.length === 0 ? <div>Empty</div> :
                //<div>You have {this.props.cartItems.length} in your Christmas Decor cart</div>
                //}
            //</div>
            <div>
                {this.props.cartItems.length}
            </div>
        ); 
    }
}
