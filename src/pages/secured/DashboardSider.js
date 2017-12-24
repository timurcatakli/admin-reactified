import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  toggleSidebar,
  openSidebar,
  closeSidebar
} from 'redux/sidebar/actions'
import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout
const propTypes = {
  collapsed: PropTypes.bool.isRequired,
  tempOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired
}

class DashboardSider extends Component {
  onMouseEnter = () => {
    const { collapsed } = this.props
    if (collapsed) {
      this.props.toggleSidebar()
    }
    return
  }

  onMouseLeave = () => {
    const { collapsed } = this.props
    if (collapsed) {
      this.props.toggleSidebar()
    }
    return
  }

  render() {
    const { collapsed, tempOpen } = this.props
    const isSiderCollapsed = tempOpen ? false : collapsed
    return (
      <Sider
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsed={isSiderCollapsed}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className="siderLogo">
          {isSiderCollapsed ? (
            <div>
              <h3>
                <Link to="/dashboard">
                  <Icon type="api" />
                </Link>
              </h3>
            </div>
          ) : (
            <h3>
              <Link to="/dashboard">REACTIFIED</Link>
            </h3>
          )}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to={'/dashboard/nav1'}>
              <Icon type="video-camera" />
              <span className="nav-text">Nav 1</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={'/dashboard/nav2'}>
              <Icon type="video-camera" />
              <span className="nav-text">Nav 2</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to={'/dashboard/nav3'}>
              <Icon type="video-camera" />
              <span className="nav-text">Nav 3</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

DashboardSider.propTypes = propTypes

export default connect(null, { toggleSidebar, openSidebar, closeSidebar })(
  DashboardSider
)
