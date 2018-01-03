import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import AAA from 'pages/public/AAA'
import BBB from 'pages/public/BBB'
import CCC from 'pages/public/CCC'
const { Header, Content, Footer } = Layout
const propTypes = {}

class PublicLayout extends Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Header style={{ position: 'fixed', width: '100%' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="0">
              <Link to={'/'}>
                <Icon type="mail" />Home
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to={'/aaa'}>
                <Icon type="mail" />Navigation One
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={'/bbb'}>
                <Icon type="mail" />Navigation One
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={'/dashboard'}>
                <Icon type="mail" />dashboard
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content
          style={{ padding: '0 50px', marginTop: 64, backgroundColor: 'gold' }}
        >
          <div
            style={{
              background: '#fff',
              padding: 24,
              minHeight: 380,
              marginTop: 50
            }}
          >
            <h1>Page Title</h1>
            <Switch>
              <Route exact path="/">
              <h1>Home</h1>
            </Route>
              <Route exact key={'aaa'} path={'/aaa'} component={AAA} />
              <Route key={'bbb'} path={'/bbb'}>
                <BBB />
              </Route>
              <Route key={'ccc'} path={'/ccc'} component={CCC} />
            </Switch>
            <p>
              Possumus efflorescere te laborum. Cupidatat aliqua quis litteris
              tempor. Se ut duis dolor veniam. Do id exquisitaque, se noster
              adipisicing, aliquip o illum sed an amet mentitum commodo,
              proident magna proident incididunt in ullamco ut possumus, ut eram
              consequat, o nisi vidisse eiusmod.Cernantur quae constias commodo.
              Si tempor excepteur coniunctione est appellat aute voluptate
              arbitror. Offendit in quis.
            </p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

PublicLayout.propTypes = propTypes
export default PublicLayout
