// TODO: This code could be stateless function...
import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
        {this.props.searchTerm} -
        <a href="#" onClick={() => this.props.handleSearchTermChange(Math.random())}>
          Change Search Term
        </a>
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
