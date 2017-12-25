export const RANDOM_USER_FETCH_REQUESTED = 'RANDOM_USER_FETCH_REQUESTED'
export const RANDOM_USER_FETCH_SUCCEEDED = 'RANDOM_USER_FETCH_SUCCEEDED'
export const RANDOM_USER_FETCH_FAILED = 'RANDOM_USER_FETCH_FAILED'
export const RECEIVE_API_DATA = 'RECEIVE_API_DATA'

export const receiveApiData = (payload) => {
  return {
    type: RECEIVE_API_DATA,
    payload: payload.results
  }
}

export const requestRandomUser = () => {
  return {
    type: RANDOM_USER_FETCH_REQUESTED
  }
}
