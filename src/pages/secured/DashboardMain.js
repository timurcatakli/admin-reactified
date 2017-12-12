import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Layout } from 'antd'
import DashboardSider from './DashboardSider'
import DashboardHeader from './DashboardHeader'
import DashboardRoutes from './DashboardRoutes'

const { Footer } = Layout
const propTypes = {
  sidebarCollapsed: PropTypes.bool.isRequired
}

class DashboardMain extends Component {
  render() {
    const {sidebarCollapsed} = this.props
    return (
      <Layout style={{ height: '100vh' }}>
        <DashboardSider collapsed={sidebarCollapsed} />
        <Layout>
          <DashboardHeader collapsed={sidebarCollapsed} />
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
    sidebarCollapsed: state.sidebar.get('collapsed')
  }
}

export default connect(mapStateToProps)(DashboardMain)
