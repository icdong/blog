/*
 * @Description: 项目入口
 * @Author: Do not edit
 * @Date: 2020-11-03 20:43:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-03 23:56:23
 */
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom'

import routes from './routes'
import requireLogin from './requireLogin'
import Login from './pages/admin/login'

class App extends Component {
    render() {
        return (
            <Router>
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
            </Router>
        );
    }
}

export default App;
