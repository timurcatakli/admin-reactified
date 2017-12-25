import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { Debounce } from 'react-throttle'
import WindowResizeListener from 'react-window-size-listener'
import { toggleSidebar } from 'redux/sidebar/actions'
import DashboardSider from 'pages/secured/DashboardSider'
import DashboardHeader from 'pages/secured/DashboardHeader'
import DashboardRoutes from 'pages/secured/DashboardRoutes'

const { Footer } = Layout
const propTypes = {
  isSiderCollapsed: PropTypes.bool.isRequired
}

class DashboardMain extends Component {
  render() {
    const { isSiderCollapsed } = this.props
    return (
      <Layout style={{ height: '100vh' }}>
        <Debounce time="1000" handler="onResize">
          <WindowResizeListener
            onResize={windowSize => {
              this.props.toggleSidebar(windowSize)
            }}
          />
        </Debounce>
        <DashboardSider
          collapsed={isSiderCollapsed}
        />
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
    isSiderCollapsed: state.sidebar.get('isSiderCollapsed')
  }
}

export default connect(mapStateToProps, { toggleSidebar })(DashboardMain)
