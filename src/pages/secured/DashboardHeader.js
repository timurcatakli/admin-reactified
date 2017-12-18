import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  openSidebar,
  closeSidebar
} from 'redux/sidebar/actions'

import { Layout, Icon } from 'antd'

const { Header } = Layout
const propTypes = {
  collapsed: PropTypes.bool.isRequired,
  openSidebar: PropTypes.func.isRequired,
  closeSidebar: PropTypes.func.isRequired
}

class DashboardHeader extends Component {
  render() {
    const {collapsed} = this.props
    return (
      <Header style={{ background: '#fff', paddingLeft: 24 }}>
        <Icon
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => this.handleSidebarToggle(collapsed)}
          className={'headerCollapseIcon'}
        />
      </Header>
    )
  }
  handleSidebarToggle = (isCollapsed) => {
    console.log(isCollapsed)
    if (isCollapsed) {
      this.props.openSidebar()
    } else {
      this.props.closeSidebar()
    }
  }
}

DashboardHeader.propTypes = propTypes
export default connect(null, {openSidebar, closeSidebar})(DashboardHeader)
