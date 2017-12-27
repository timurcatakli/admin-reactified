import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import { getInvite } from 'redux/twitter/actions'

const { Content } = Layout
const propTypes = {
  getInvite: PropTypes.func.isRequired
}

class Nav1 extends Component {
  componentDidMount() {
    this.props.getInvite('fletcher-jones')
  }

  render() {
    return (
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          background: '#fff',
          minHeight: 280
        }}
      >
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
  const { twitterData } = state
  return {
    twitterData
  }
}

export default connect(mapStateToProps, {getInvite})(Nav1)
