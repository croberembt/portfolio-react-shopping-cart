import React from 'react'; 
import Products from './components/ProductComponent';
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
                            <div className='col-8 main'>
                                <Products products={this.state.products} />
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
