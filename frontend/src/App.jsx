import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import AdminPanel from './components/AdminPanel';
import ChatWidget from './components/ChatWidget';

const App = () => {
    return (
        <Router>
            <div className="bg-black text-white">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/product/:id" component={ProductDetail} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/admin" component={AdminPanel} />
                </Switch>
                <ChatWidget />
            </div>
        </Router>
    );
};

export default App;