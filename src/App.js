import React from 'react'; 
import ProductComponent from './components/ProductComponent';
import FilterComponent from './components/FilterComponent';
import CartComponent from './components/CartComponent';
import { Provider } from 'react-redux'; 
import store from './store';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cartItems: JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : [],
        }
    }

   addToCart = (product) => {
       const cartItems = this.state.cartItems.slice(); 
       let alreadyInCart = false;  
       cartItems.forEach((item) => {
            if (item._id === product._id) {
                console.log(cartItems);
                item.count++; 
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            console.log(cartItems); 
            cartItems.push({...product, count: 1}); 
        }
        this.setState({cartItems});
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    // below function is just a simple pop of the last item added currently, just a placeholder, will update function to only remove when product ids match

    removeFromCart = (product) => {
        const cartItems = this.state.cartItems.slice(); 
        this.setState({cartItems: cartItems.filter(item => item._id !== product._id)});
        localStorage.setItem('cartItems', JSON.stringify(cartItems.filter(item => item._id !== product._id))
        );
    }

    createOrder = order => {
        this.setState(order); 
        alert('Your order for ' + order.name + ' is being sent to ' + order.address);
    }

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
                                    <CartComponent 
                                        cartItems={this.state.cartItems}
                                        removeFromCart={this.removeFromCart}
                                        createOrder={this.createOrder}
                                    />
                                </div>
                                <div className='col-12 main'>
                                    <ProductComponent 
                                        addToCart={this.addToCart}
                                    />
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
