import React from 'react'; 
import { Provider } from 'react-redux'; 
import store from './store';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import HomeScreen from './screens/HomeScreen'; 
import AdminScreen from './screens/AdminScreen'; 

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className='container-fluid'>
                        <header>
                            <h2><Link to='/'>Christmas Decor Online Store</Link></h2>
                        </header>
                        <main>
                            <Route path='/admin' component={AdminScreen} />
                            <Route path='/home' component={HomeScreen} exact />
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
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
