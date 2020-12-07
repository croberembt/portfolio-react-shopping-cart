import React, { Component } from 'react';

export default class FilterComponent extends Component {
    render() {
        return (
            <div className='filter'>
                <div className='filter-result'>{this.props.count} Decorations</div>
                <div className='filter-sort'>
                    Sort By Price
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option value=''>Default</option>
                        <option value='lowest'>Lowest</option>
                        <option value='highest'>Highest</option>
                    </select>
                </div>
                <div className='filter-style'>
                    Filter
                <select value={this.props.productStyle} onChange={this.props.filterProducts}>
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