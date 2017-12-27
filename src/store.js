import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { devToolsEnhancer } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { routerReducer } from 'react-router-redux'
import reducers from './redux/reducers'

const history = createHistory()
const store = createStore(
  combineReducers({ ...reducers, router: routerReducer }),
  devToolsEnhancer(),
  applyMiddleware(thunk)
)

export { store, history }
