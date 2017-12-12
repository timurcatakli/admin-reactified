import { Map } from 'immutable'
import actions from './actions'

const initState = new Map({
  loading: false,
  collapsed: true
})

export default function reducer(state = initState, action) {
  switch (action.type) {
  case actions.TOGGLE_SIDEBAR:
    const currentState = state.get('collapsed')
    return state.set('collapsed', !currentState)
  default:
    return state
  }
}
