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
