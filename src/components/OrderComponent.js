import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../actions/orderActions'; 
import formatCurrency from '../util'; 

class OrderComponent extends Component {

    componentDidMount() {
        this.props.fetchOrders(); 
    }

    render() {
        return (
            
                <div className='container'>
                    {
                    !orders ? 
                    <div>
                        ...Loading
                    </div>
                    :
                    <div>
                        {this.props.orders.map(order => 
                           <div>
                                {order._id}
                                {order.createdAt}
                                {formatCurrency(order.total)}
                                {order.name}
                                {order.email}
                                {order.address}
                                {order.cartItems.map(item => 
                                    <div>
                                        {item.count} {'x'} {item.title}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                    }
                </div>
            
        )
    }
}

export default connect(state => ({orders: state.order.orders}), {fetchOrders})(OrderComponent); 
