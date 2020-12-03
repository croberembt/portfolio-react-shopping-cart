import React, { Component } from 'react'

export default class FilterComponent extends Component {
    render() {
        return (
            <div>
                <div className='filter-result'>{this.props.count}</div>
                <div className='filter-sort'>
                    Sort
                    <select>
                        <option value='lowest'>Lowest</option>
                        <optoin value='highest'>Highest</optoin>
                    </select>
                </div>
                <div className='filter-style'>
                    Filter
                </div>
                <select>
                    <option value=''>All</option>
                    <option value='wreaths'>Wreaths</option>
                    <option value='knickknacks'>Knickknacks</option>
                    <option value='ornaments'>Ornaments</option>
                </select>
            </div>
        )
    }
}