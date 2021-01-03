import React from 'react'; 
import ProductComponent from './components/ProductComponent';
import FilterComponent from './components/FilterComponent';
import CartComponent from './components/CartComponent';
import { Provider } from 'react-redux'; 
import store from './store';

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <div className='container-fluid'>
                    <header>
                        <h2><a href='/'>Christmas Decor Online Store</a></h2>
                    </header>
                    <main>
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
            </Provider>
        );
    }
}

export default App;
