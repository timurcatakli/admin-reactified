import { Map } from 'immutable'
import {
  SIDEBAR_TOGGLE_REQUESTED,
  SIDEBAR_TOGGLE_REQUESTED2,
  SIDEBAR_OPEN_REQUESTED,
  SIDEBAR_CLOSE_REQUESTED
} from './actions'

const initState = new Map({
  isSiderCollapsed: false,
  isSiderTempOpen: false
})

export default function reducer(state = initState, action) {
  switch (action.type) {
  case SIDEBAR_TOGGLE_REQUESTED:
    const currentState = state.get('isSiderTempOpen')
    return state.set('isSiderTempOpen', !currentState)
  case SIDEBAR_TOGGLE_REQUESTED2:
    const currentState2 = state.get('isSiderTempOpen')
    return state.set('isSiderTempOpen', !currentState2)
  case SIDEBAR_OPEN_REQUESTED:
    return state.set('isSiderCollapsed', false)
  case SIDEBAR_CLOSE_REQUESTED:
    return state.set('isSiderCollapsed', true)
  default:
    return state
  }
}
