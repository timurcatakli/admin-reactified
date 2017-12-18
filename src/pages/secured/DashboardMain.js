import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Layout } from 'antd'
import DashboardSider from 'pages/secured/DashboardSider'
import DashboardHeader from 'pages/secured/DashboardHeader'
import DashboardRoutes from 'pages/secured/DashboardRoutes'

const { Footer } = Layout
const propTypes = {
  isSiderCollapsed: PropTypes.bool.isRequired,
  isSiderTempOpen: PropTypes.bool.isRequired
}

class DashboardMain extends Component {
  render() {
    const {isSiderCollapsed, isSiderTempOpen} = this.props
    return (
      <Layout style={{ height: '100vh' }}>
        <DashboardSider collapsed={isSiderCollapsed} tempOpen={isSiderTempOpen} />
        <Layout>
          <DashboardHeader collapsed={isSiderCollapsed} />
          <DashboardRoutes />
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

DashboardMain.propTypes = propTypes

const mapStateToProps = (state = {}) => {
  return {
    isSiderCollapsed: state.sidebar.get('isSiderCollapsed'),
    isSiderTempOpen: state.sidebar.get('isSiderTempOpen')
  }
}

export default connect(mapStateToProps)(DashboardMain)
