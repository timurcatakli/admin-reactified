import { RANDOM_USER_FETCH_SUCCEEDED, RANDOM_USER_FETCH_FAILED } from './actions'

const initState = {}

export default function reducer(state = initState, action) {
  switch (action.type) {
  case RANDOM_USER_FETCH_SUCCEEDED:
    return {...state, ...action.data}
  case RANDOM_USER_FETCH_FAILED:
    return state
  default:
    return state
  }
}
