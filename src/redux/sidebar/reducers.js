import { Map } from 'immutable'
import actions from './actions'

const initState = new Map({
  collapsed: true
})

export default function reducer(state = initState, action) {
  switch (action.type) {
  case actions.SIDEBAR_TOGGLE_REQUESTED:
    const currentState = state.get('collapsed')
    return state.set('collapsed', !currentState)
  default:
    return state
  }
}
