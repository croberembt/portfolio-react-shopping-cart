import React from 'react'; 
import ProductComponent from './components/ProductComponent';
import FilterComponent from './components/FilterComponent';
import CartComponent from './components/CartComponent';
import data from './data.json'; 

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            productStyle: '',
            productSort: '',
            cartItems: JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : [],
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
                    if (a.price <= b.price) {
                        return 1;
                    } else {
                        return -1;
                    }
                } else {
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
            <div className='container-fluid'>
                <header>
                    <h2><a href='/'>Christmas Decor Online Store</a></h2>
                </header>
                <main>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 filter-section'>
                                <FilterComponent 
                                    count={this.state.products.length} 
                                    productStyle={this.state.productStyle} 
                                    productSort={this.state.productSort}
                                    sortProducts={this.sortProducts}
                                    filterProducts={this.filterProducts}
                                /> 
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
                                    products={this.state.products} 
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
        );
    }
}

export default App;
