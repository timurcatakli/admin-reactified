import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { devToolsEnhancer } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import { routerReducer } from 'react-router-redux'
import reducers from './redux/reducers'
import sagas from './redux/sagas'

const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({ ...reducers, router: routerReducer }),
  devToolsEnhancer(),
  compose(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(sagas)
export { store, history }
