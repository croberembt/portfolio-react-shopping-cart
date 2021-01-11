import React, { Component } from 'react';
import FilterComponent from '../components/FilterComponent';
import CartComponent from '../components/CartComponent'; 
import ProductComponent from '../components/ProductComponent';

export default class HomeScreen extends Component {
    render() {
        return (
            <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 filter-section'>
                                <FilterComponent /> 
                            </div>
                            <div className='col-md-6 cart-style' style={{color: 'white'}}>
                                <CartComponent />
                            </div>
                            <div className='col-12 main'>
                                <ProductComponent />
                            </div>
                        </div>
            </div>
        )
    }
}
