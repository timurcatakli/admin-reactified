export const TWITTER_DATA_FETCH_REQUESTED = 'TWITTER_DATA_FETCH_REQUESTED'
export const TWITTER_DATA_FETCH_SUCCEEDED = 'TWITTER_DATA_FETCH_SUCCEEDED'
export const TWITTER_DATA_FETCH_FAILED = 'TWITTER_DATA_FETCH_FAILED'
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA'

export const receiveApiData = (payload) => {
  return {
    type: RECEIVE_API_DATA,
    payload: payload.results
  }
}

export const requestTwitterData = () => {
  return {
    type: TWITTER_DATA_FETCH_REQUESTED
  }
}
