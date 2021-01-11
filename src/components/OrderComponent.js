import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../actions/orderActions'; 
import formatCurrency from '../util'; 
import { Table } from 'reactstrap';

class OrderComponent extends Component {

    componentDidMount() {
        this.props.fetchOrders(); 
    }

    render() {
        return (

                <div className='container'>
                    {
                        !this.props.orders ? 
                        <div>
                            ...Loading
                        </div>
                        :
                        <div>
                            <div>
                                <h3 className='text-center' style={{marginBottom: '1rem', color: 'white'}}>Order History</h3>
                            </div>
                            <Table responsive bordered hover size='sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Shipping Address</th>
                                        <th>Items Ordered</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                {this.props.orders.map(order => 
                                    <tbody>
                                        <tr>
                                            <th scope="row">{order._id}</th>
                                            <td>{order.createdAt}</td>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.address}</td>
                                            <td>                                 
                                                {order.cartItems.map(item => 
                                                    <div>
                                                        {item.count} {'x'} {item.title}
                                                    </div>
                                                )}
                                            </td>
                                            <td>{formatCurrency(order.total)}</td>
                                        </tr>
                                    </tbody>
                                )}
                            </Table>
                        </div>
                    }
                </div>
            
        )
    }
}

export default connect(state => ({orders: state.order.orders}), {fetchOrders})(OrderComponent); 
