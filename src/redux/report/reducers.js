import { REPORT_FETCH_REQUESTED } from './actions'

const initState = []

export default function reducer(state = initState, action) {
  switch (action.type) {
  case REPORT_FETCH_REQUESTED:
    return [...state, ...action.payload]
  default:
    return state
  }
}
