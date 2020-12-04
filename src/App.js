import React from 'react'; 
import ProductComponent from './components/ProductComponent';
import FilterComponent from './components/FilterComponent';
import data from './data.json'; 

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            productStyle: '',
            productSort: ''
        }
    }

    sortProducts = (event) => {
        const productSort = event.target.value;
        console.log(event.target.value); 
        this.setState((state) => ({
            productSort: productSort,
            products: this.state.products.slice().sort((a, b) => { 
                if (productSort === 'lowest') { 
                    if (a.price >= b.price) { 
                        return 1; 
                    } else {
                        return -1; 
                    }
                } else if (productSort === 'highest') {
                    if (a. price <= b.price) {
                        return 1;
                    } else {
                        return -1;
                    }
                } else if (productSort === '') {
                    return state; 
                }
            })
        }));
    };

    filterProducts = (event) => {
        console.log(event.target.value); 
        if(event.target.value === '') {
            this.setState({productStyle: event.target.value, products: data.products}); 
        } else {
            this.setState({
                productStyle: event.target.value,
                products: data.products.filter(product => (product.productStyle.indexOf(event.target.value) >= 0))
            })
        }
    };

    render() {
        return (
            <div className='container-fluid'>
                <header>
                    <h2><a href='/'>Christmas Decor Online Store</a></h2>
                </header>
                <main>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-8 filter-section'>
                                <FilterComponent 
                                    count={this.state.products.length} 
                                    productStyle={this.state.productStyle} 
                                    productSort={this.state.productSort}
                                    sortProducts={this.sortProducts}
                                    filterProducts={this.filterProducts}
                                /> 
                            </div>
                            <div className='col-8 main'>
                                <ProductComponent products={this.state.products} />
                            </div>
                            <div className='col sidebar text-right' style={{color: 'white'}}>
                                <h3>My Cart</h3>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 footer-copyright'>
                                © 2020, Calli Oberembt
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
