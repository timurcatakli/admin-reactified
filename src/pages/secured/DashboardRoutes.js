import React, { Component } from 'react'
import Nav1 from './nav1/Nav1'
import Nav2 from './nav2/Nav2'
import Nav3 from './nav3/Nav3'
import { Switch, Route } from 'react-router-dom'

class DashboardRoutes extends Component {
  render() {
    return (
      <Switch style={{ height: '100vh' }}>
        <Route exact path={'/dashboard/'} component={Nav3} />
        <Route exact path={'/dashboard/nav1/'} component={Nav1} />
        <Route exact path={'/dashboard/nav2/'} component={Nav2} />
        <Route exact path={'/dashboard/nav3/'} component={Nav3} />
      </Switch>
    )
  }
}

export default DashboardRoutes
