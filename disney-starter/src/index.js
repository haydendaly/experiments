import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import App from './components/App';
import Characters from './components/Characters';
import About from './components/About';

function Index() {
    return (
        <Router>
            <Switch>
                <Route path="/characters"><Characters /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/"><App /></Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
);