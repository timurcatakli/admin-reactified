import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { routerReducer } from 'react-router-redux'
import reducers from './redux/reducers'

const history = createHistory()
const store = createStore(
  combineReducers({...reducers, router: routerReducer}), devToolsEnhancer())
export { store, history }
