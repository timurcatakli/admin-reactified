import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { fetchUsers } from 'redux/users/actions'

const { Content } = Layout
const propTypes = {
  users: PropTypes.array.isRequired,
  fetchUsers: PropTypes.func.isRequired
}

class Nav1 extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }
  renderUsers = users => {
    return users.map(user => {
      return <h1 key={user.id}>{user.email}</h1>
    })
  }

  render() {
    const { users } = this.props
    return (
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280
        }}
      >
        {this.renderUsers(users)}
        <p>
          Export consequat ita graviterque iis aliqua ut doctrina eu sint. Nulla
          occaecat eu laboris, admodum si magna. Ne sed comprehenderit ubi
          appellat sint possumus. De ad eram dolore amet, velit de quibusdam aut
          aliqua non tamen ingeniis te incurreret, eram ubi incurreret te
          dolore.Eu tempor coniunctione quo possumus ad veniam eiusmod et
          doctrina de officia, nescius ita nulla doctrina, ut nisi quid si
          quibusdam, id constias imitarentur se offendit tamen minim ingeniis
          noster nam nescius non iudicem. E tamen eiusmod iudicem, probant minim
          duis sed eram an minim domesticarum expetendis quem fabulas, ex
          mentitum coniunctione. Fore id cupidatat iis qui fugiat nescius
          quamquam ea offendit quem ut admodum distinguantur, ubi aliquip nam
          fabulas.
        </p>
      </Content>
    )
  }
}

Nav1.propTypes = propTypes

const mapStateToProps = state => {
  const { users } = state
  return {
    users
  }
}

export default connect(mapStateToProps, {fetchUsers})(Nav1)
