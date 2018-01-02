// TODO: This code could be stateless function...
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const propTypes = {
  searchTerm: PropTypes.string,
  handleSearchTermChange: PropTypes.func
}

class Home extends Component {
  render() {
    return (
      <p>
        Home class component is working -
        <Link to={'/aboutus'}>AboutUs</Link>
        -
        <Link to={'/dashboard'}>dashboard</Link>
        -
        <Link to={'/signup'}>signup</Link>
      </p>
    )
  }
}

Home.propTypes = propTypes
export default Home
