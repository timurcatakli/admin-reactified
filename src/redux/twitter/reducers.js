import { TWITTER_DATA_FETCH_SUCCEEDED, TWITTER_DATA_FETCH_FAILED } from './actions'

const initState = {}

export default function reducer(state = initState, action) {
  switch (action.type) {
  case TWITTER_DATA_FETCH_SUCCEEDED:
    return {...state, ...action.data}
  case TWITTER_DATA_FETCH_FAILED:
    return state
  default:
    return state
  }
}
