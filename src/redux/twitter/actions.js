import { database } from 'helpers/firebase'

const actionTypes = {
  GetInviteRequested: 'GET_INVITE_REQUESTED',
  GetInviteRejected: 'GET_INVITE_REJECTED',
  GetInviteFulfilled: 'GET_INVITE_FULFILLED',

  AddToInviteRequested: 'ADD_TO_INVITE_REQUESTED',
  AddToInviteRejected: 'ADD_TO_INVITE_REJECTED',
  AddToInviteFulfilled: 'ADD_TO_INVITE_FULFILLED',

  GuestAdded: 'GUEST_ADDED'
}

function getInviteRequestedAction() {
  return {
    type: actionTypes.GetInviteRequested
  }
}

function getInviteRejectedAction() {
  return {
    type: actionTypes.GetInviteRejected
  }
}

function getInviteFulfilledAction(invite) {
  return {
    type: actionTypes.GetInviteFulfilled,
    invite
  }
}

export function getInvite(key) {
  console.log(key)
  return dispatch => {
    dispatch(getInviteRequestedAction())
    return database
      .ref('/accounts/fletcher-jones')
      .once('value', snap => {
        const invite = snap.val()
        dispatch(getInviteFulfilledAction(invite))
      })
      .catch(error => {
        console.log(error)
        dispatch(getInviteRejectedAction())
      })
  }
}

// export const receiveApiData = (payload) => {
//   return {
//     type: RECEIVE_API_DATA,
//     payload: payload.results
//   }
// }
//
// export const requestTwitterData = () => {
//   return {
//     type: TWITTER_DATA_FETCH_REQUESTED
//   }
// }
