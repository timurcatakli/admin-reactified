import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import DashboardMain from './pages/secured/DashboardMain'

import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path={'/aboutus'} component={AboutUs} />
            <Route path={'/dashboard'} component={DashboardMain} />
          </Switch>
        </div>
      </Provider>
    )
  }
}

export default App
