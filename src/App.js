// Sidebar title, and icon responsive durumuna gore degiesecek
// Favicon
// http://localhost:3000/dashboard/nav1

import React from 'react'
import { Provider } from 'react-redux'
import { store, history } from './store'
import Routes from './routes'
import './App.css'

const propTypes = {}

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    )
  }
}

App.propTypes = propTypes
export default App
