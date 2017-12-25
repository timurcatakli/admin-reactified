import { Map } from 'immutable'
import {
  SIDEBAR_TOGGLE_REQUESTED,
  SIDEBAR_OPEN_REQUESTED,
  SIDEBAR_CLOSE_REQUESTED
} from './actions'

const initState = new Map({ isSiderCollapsed: false })

export default function reducer(state = initState, action) {
  switch (action.type) {
  case SIDEBAR_TOGGLE_REQUESTED:
    switch (action.payload.view) {
    case 'MobileView':
      return state.set('isSiderCollapsed', true)
    case 'TabView':
      return state.set('isSiderCollapsed', false)
    case 'DesktopView':
      return state.set('isSiderCollapsed', false)
    default:
      return state
    }
  case SIDEBAR_OPEN_REQUESTED:
    return state.set('isSiderCollapsed', false)
  case SIDEBAR_CLOSE_REQUESTED:
    return state.set('isSiderCollapsed', true)
  default:
    return state
  }
}
