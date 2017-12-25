import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {
  openSidebar,
  closeSidebar
} from 'redux/sidebar/actions'
import { Layout, Menu, Icon } from 'antd'

const { Sider } = Layout
const propTypes = {
  collapsed: PropTypes.bool.isRequired,
}

class DashboardSider extends Component {
  render() {
    const { collapsed } = this.props
    const isSiderCollapsed = collapsed
    return (
      <Sider
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsed={isSiderCollapsed}
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

export default connect(null, { openSidebar, closeSidebar })(
  DashboardSider
)
