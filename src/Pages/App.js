import React from 'react';
import { routes } from './routes';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

const App = () => {
    return(
        <React.Fragment>
            <Router>
                <Switch>
                    {
                        routes.map((route) => {
                            return(
                                <Route exact path={route.path} component={route.component} />
                            )
                        })
                    }
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App;