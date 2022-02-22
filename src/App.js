import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Home';
import Payment from './Payment';

function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/payment" component={Payment} />
        </Switch>
    );
}

export default App;
