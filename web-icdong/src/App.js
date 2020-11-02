// import api from './api'
import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Redirect
} from 'react-router-dom'

import routes from './Router'
import requireLogin from './requireLogin'
import Login from './pages/admin/login'

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" render={() => <Redirect to="/web/index" push />} />
                    <Route path='/login' component={Login} />
                    {routes.map((route, i) => (
                        <Route
                            key={i}
                            path={route.path}
                            component={
                                route.path.includes('/admin')
                                    ? requireLogin(route.component)
                                    : route.component
                            }
                        />
                    ))}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
