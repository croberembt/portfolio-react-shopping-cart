import React, { Component } from 'react';
import {filterProducts, sortProducts} from '../actions/productActions'; 
import {connect} from 'react-redux'; 

class FilterComponent extends Component {
    render() {
        return (
            !this.props.filteredProducts ? 
            <div style={{fontWeight: 'bold', color: 'white'}}>
                Loading...
            </div>
            :
            <div className='filter'>
                <div className='filter-result'>{this.props.filteredProducts.length} Decorations</div>
                <div className='filter-sort'>
                    Sort By Price
                    <select value={this.props.productSort} onChange={(event) => this.props.sortProducts(this.props.filteredProducts, event.target.value)}>
                        <option value=''>Default</option>
                        <option value='lowest'>Lowest</option>
                        <option value='highest'>Highest</option>
                    </select>
                </div>
                <div className='filter-style'>
                    Filter
                <select value={this.props.productStyle} onChange={(event) => this.props.filterProducts(this.props.products, event.target.value)}>
                    <option value=''>Select</option>
                    <option value=''>All</option>
                    <option value='wreaths'>Wreaths</option>
                    <option value='knickknacks'>Knickknacks</option>
                    <option value='ornaments'>Ornaments</option>
                </select>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({productStyle: state.products.productStyle, productSort: state.products.productSort, products: state.products.items, 
    filteredProducts: state.products.filteredItems}), {filterProducts, sortProducts})(FilterComponent); 