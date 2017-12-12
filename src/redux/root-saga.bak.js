// We can read the saga as follows:
// Wait for the FETCH_USER_SUCCESS action to be dispatched. This basically will be on hold until an event triggers it. We use the take effect for this.
// We take a value from the store. The select effect receives a function which has access to the store. We assign the user information to the constant user.
// We exec an async operation to load the departure information, and pass the user as parameter using the call Effect.
// After the loadDeparture is finished, we execute the loadFlight with the departure object fetched in the previous operation.
// The same will apply with the forecast, we need to wait until the flight is loaded to execute the next call effect.
// Finally, once all the operations are finished, we use the put Effect to dispatch and action to the store and send all the arguments using the information loaded during the whole saga.

function* loadDashboardSequenced() {
  try {
    yield take('FETCH_USER_SUCCESS')
    const user = yield select(state => state.user)

    const departure = yield call(loadDeparture, user)
    const flight = yield call(loadFlight, departure.flightID)
    const forecast = yield call(loadForecast, departure.date)
    yield put({
      type: 'FETCH_DASHBOARD_SUCCESS',
      payload: { forecast, flight, departure }
    })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error: error.message })
  }
}

function* loadDashboardNonSequenced() {
  try {
    // Wait for the user to be loaded
    yield take('FETCH_USER_SUCCESS')
    // Take the user info from the store
    const user = yield select(getUserFromState)
    // Get Departure information
    const departure = yield call(loadDeparture, user)
    // Here is when the magic happens
    const [flight, forecast] = yield [
      call(loadFlight, departure.flightID),
      call(loadForecast, departure.date)
    ]
    // Tell the store we are ready to be displayed
    yield put({
      type: 'FETCH_DASHBOARD2_SUCCESS',
      payload: { departure, flight, forecast }
    })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error: error.message })
  }
}

const [flight, forecast] = yield [call(loadFlight, departure.flightID), call(loadForecast, departure.date)]

// We can read it like this:
// First, call a function called getUser, and assign the result to the const user.
// Later, dispatch an action called FETCH_USER_SUCCESS and pass the value of user to be consumed by the store.
// If something goes bad, dispatch an action called FETCH_FAILED.

function* loadUser() {
  try {
    // 1st step
    const user = yield call(getUser)
    // 2nd step
    yield put({ type: 'FETCH_USER_SUCCESS', payload: user })
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error })
  }
}

// Redux saga expose several methods called Effects, we are going to define several of them:
// -- Fork -- performs a non-blocking operation on the function passed.
// -- Take -- pauses until action received.
// -- Race -- runs effects simultaneously, then cancels them all once one finishes.
// -- Call -- runs a function. If it returns a promise, pauses the saga until the promise is resolved.
// -- Put -- dispatches an action.
// -- Select -- Runs a selector function to get data from the state
// -- takeLatest -- means we are going to execute the operations, then return only the results of the last one call. If we trigger several cases, it’s going to ignore all of them except the last one.
// -- takeEvery -- will return results for all the calls triggered.

function* rootSaga() {
  yield[
    fork(loadUser),
    takeLatest('LOAD_DASHBOARD', loadDashboardSequenced),
    takeLatest('LOAD_DASHBOARD2' loadDashboardNonSequenced)
  ]
}
