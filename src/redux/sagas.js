// We can read the saga as follows:
// Wait for the FETCH_USER_SUCCESS action to be dispatched. This basically will be on hold until an event triggers it. We use the take effect for this.
// We take a value from the store. The select effect receives a function which has access to the store. We assign the user information to the constant user.
// We exec an async operation to load the departure information, and pass the user as parameter using the call Effect.
// After the loadDeparture is finished, we execute the loadFlight with the departure object fetched in the previous operation.
// The same will apply with the forecast, we need to wait until the flight is loaded to execute the next call effect.
// Finally, once all the operations are finished, we use the put Effect to dispatch and action to the store and send all the arguments using the information loaded during the whole saga.

import { call, put, takeLatest } from 'redux-saga/effects'

import {
  TWITTER_DATA_FETCH_REQUESTED,
  TWITTER_DATA_FETCH_SUCCEEDED,
  TWITTER_DATA_FETCH_FAILED
} from 'redux/twitter/actions/'

import { fetchData } from './api'

export function* getTwitterData() {
  try {
    const data = yield call(fetchData)
    yield put({ type: TWITTER_DATA_FETCH_SUCCEEDED, data })
  } catch (error) {
    yield put({ type: TWITTER_DATA_FETCH_FAILED, error })
  }
}

export default function* sagas() {
  yield takeLatest(TWITTER_DATA_FETCH_REQUESTED, getTwitterData)
}
