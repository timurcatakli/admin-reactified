// TODO: This code could be stateless function...
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setSearchTerm } from '../actionCreators'
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
        {this.props.searchTerm} -
        <button onClick={() => this.props.handleSearchTermChange(Math.random())}>
          Change Search Term
        </button>
      </p>
    )
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm })
const mapDispatchToProps = dispatch => ({
  handleSearchTermChange(value) {
    dispatch(setSearchTerm(value))
  }
})

Home.propTypes = propTypes
export default connect(mapStateToProps, mapDispatchToProps)(Home)
