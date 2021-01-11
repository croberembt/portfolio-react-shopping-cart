import React from 'react'; 
import { Provider } from 'react-redux'; 
import store from './store';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom'; 
import HomeScreen from './screens/HomeScreen'; 
import AdminScreen from './screens/AdminScreen'; 
import { Navbar, Nav, NavItem } from 'reactstrap';

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className='container-fluid'>
                        <Navbar dark expand='xs'>
                            <Nav navbar>
                                <NavItem style={{paddingRight: '.5rem', paddingBottom:'.5rem'}}>
                                    <NavLink className='nav-link' to='/home'>
                                        <i className='fa fa-home fa-lg' /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem style={{paddingRight: '.5rem', paddingBottom:'.5rem'}}>
                                    <NavLink className='nav-link' to='/admin'>
                                        <i className='fa fa-user fa-lg' /> Admin
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Navbar>
                        <main>
                            <Route path='/admin' component={AdminScreen} />
                            <Route path='/home' component={HomeScreen} exact />
                            <Redirect to='/home' />
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
