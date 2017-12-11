import React, { Component } from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'

const { Header, Content, Footer, Sider } = Layout

class DashboardMain extends Component {
  render() {
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider
          breakpoint="lg"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type)
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', paddingLeft: 24 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            <h1>h1 Header</h1>
            <h2>h2 Header</h2>
            <h3>h3 Header</h3>
            <p>
              Export consequat ita graviterque iis aliqua ut doctrina eu sint. Nulla occaecat
              eu laboris, admodum si magna. Ne sed comprehenderit ubi appellat sint possumus.
              De ad eram dolore amet, velit de quibusdam aut aliqua non tamen ingeniis te
              incurreret, eram ubi incurreret te dolore.Eu tempor coniunctione quo possumus ad
              veniam eiusmod et doctrina de officia, nescius ita nulla doctrina, ut nisi quid
              si quibusdam, id constias imitarentur se offendit tamen minim ingeniis noster
              nam nescius non iudicem. E tamen eiusmod iudicem, probant minim duis sed eram an
              minim domesticarum expetendis quem fabulas, ex mentitum coniunctione. Fore id
              cupidatat iis qui fugiat nescius quamquam ea offendit quem ut admodum
              distinguantur, ubi aliquip nam fabulas.
            </p>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    )
  }
  state = { collapsed: false }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
}

export default DashboardMain
