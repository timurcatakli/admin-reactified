import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import DashboardMain from './pages/secured/DashboardMain'

const propTypes = {
  history: PropTypes.object.isRequired
}

const Routes = (props) => {
  const {history} = props
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/dashboard" component={DashboardMain} />
      </div>
    </ConnectedRouter>
  )
}

Routes.propTypes = propTypes
export default Routes
