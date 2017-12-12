import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import sidebarActions from '../../redux/sidebar/actions'
import { Layout, Icon } from 'antd'

const { Header } = Layout
const propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}
const { toggleSidebar } = sidebarActions

class DashboardHeader extends Component {
  render() {
    const {collapsed} = this.props
    return (
      <Header style={{ background: '#fff', paddingLeft: 24 }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.handleSidebarToggle}
        />
      </Header>
    )
  }
  handleSidebarToggle = () => {
    this.props.toggleSidebar()
  }
}

DashboardHeader.propTypes = propTypes
export default connect(null, {toggleSidebar})(DashboardHeader)
