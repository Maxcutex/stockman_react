import React, { Component } from 'react';
import '../assets/css/bootstrap.css';
import '../assets/css/style.css';
import '../App.css';

import PriceBar from './common/PriceBar';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home/Home';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <PriceBar />
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;