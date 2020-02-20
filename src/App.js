import React from 'react';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './App.css';
import routes from './routes';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApplicationTemplate from './Template';

function App() {
    const renderComponents = routes.map(route =>
        <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
        />
            );
        return (
            <BrowserRouter>
                <ApplicationTemplate>
                    <Switch>
                        {renderComponents}
                    </Switch>
                </ApplicationTemplate>
            </BrowserRouter>);
}

export default App;
