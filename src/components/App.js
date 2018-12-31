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
                <Switch>
                    <div>
                        <PriceBar />
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Footer />
                    </div>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
