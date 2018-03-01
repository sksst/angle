import React from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import IndexPage from './routes/IndexPage';

function RouterConfig() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={IndexPage} />
            </Switch>
        </Router>
    );
}

export default RouterConfig;