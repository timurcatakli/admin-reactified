import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import DashboardMain from './pages/secured/DashboardMain'
import SignUp from './pages/authentication/SignUp'

const propTypes = {
  history: PropTypes.object.isRequired
}

// TODO: Export below routes from a file
const SIGN_UP = '/signup'
const SIGN_IN = '/signin'
const LANDING = '/'
const HOME = '/home'
const ACCOUNT = '/account'
const PASSWORD_FORGET = '/pw-forget'

const Routes = props => {
  const { history } = props
  return (
    <ConnectedRouter history={history}>
      <div>
        <Route exact path={LANDING} component={Home} />
        <Route exact path={SIGN_UP} component={SignUp} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/dashboard" component={DashboardMain} />
      </div>
    </ConnectedRouter>
  )
}

Routes.propTypes = propTypes
export default Routes
