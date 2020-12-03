import React from 'react'; 
import ProductComponent from './components/ProductComponent';
import FilterComponent from './components/FilterComponent';
import data from './data.json'; 

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            decorStyle: '',
            sort: ''
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
                            <div className='col-12 filter-section'>
                                <FilterComponent count={this.state.products.length} /> 
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
                <footer>© 2020, Calli Oberembt</footer>
            </div>
        );
    }
}

export default App;
