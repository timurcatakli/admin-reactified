import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import PublicLayout from 'pages/public/PublicLayout'
import DashboardLayout from './pages/secured/DashboardLayout'

const propTypes = {
  history: PropTypes.object.isRequired
}

const Routes = props => {
  const { history } = props
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/dashboard" component={DashboardLayout} />
        <Route path="/" component={PublicLayout} />
      </Switch>
    </ConnectedRouter>
  )
}

Routes.propTypes = propTypes
export default Routes
