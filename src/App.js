import React from 'react'; 
import Products from './components/Products';
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
            <div className='grid-container'>
                <header>
                    <a href='/'>Christmas Decor Online Store</a>
                </header>
                <main>
                    <div className='content'>
                        <div className='main'>
                            <Products products={this.state.products} />
                        </div>
                        <div className='sidebar'>
                            My Cart
                        </div>
                    </div>
                </main>
                <footer>© 2020, Calli Oberembt</footer>
            </div>
        );
    }
}

export default App;
