import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import Home from './pages/Home'
import PublicLayout from 'pages/public/PublicLayout'
import AboutUs from './pages/AboutUs'
import DashboardMain from './pages/secured/DashboardMain'
import SignUp from './pages/authentication/SignUp'
import SignIn from './pages/authentication/SignIn'

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
      <Switch>
        <Route exact path="/dashboard" component={DashboardMain} />
        <Route path='/' component={PublicLayout} />
        {/* <Route exact path={SIGN_UP} component={SignUp} />
        <Route exact path={SIGN_IN} component={SignIn} />
        <Route path="/aboutus" component={AboutUs} /> */}
      </Switch>
    </ConnectedRouter>
  )
}

Routes.propTypes = propTypes
export default Routes
