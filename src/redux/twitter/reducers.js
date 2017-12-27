// import { TWITTER_DATA_FETCH_SUCCEEDED, TWITTER_DATA_FETCH_FAILED } from './actions'

const initState = {}

export default function reducer(state = initState, action) {
  switch (action.type) {
  case 'GET_INVITE_FULFILLED':
    return {...state, ...action.invite}
  case 'TWITTER_DATA_FETCH_FAILED':
    return state
  default:
    return state
  }
}
