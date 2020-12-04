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
            sort: ''
        }
    }

    sortProducts(event) {
        console.log(event.target.value); 
    }

    filterProducts = (event) => {
        console.log(event.target.value); 
        if(event.target.value === '') {
            this.setState({productStyle: event.target.value, product:data.products}); 
        } else {
            this.setState({
                productStyle: event.target.value,
                products: data.products.filter(product => (product.productStyle.indexOf(event.target.value) >= 0))
            })
        }
    }

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
                                    sort={this.state.sort}
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
