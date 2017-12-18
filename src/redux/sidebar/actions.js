export const SIDEBAR_TOGGLE_REQUESTED = 'SIDEBAR_TOGGLE_REQUESTED'
export const SIDEBAR_OPEN_REQUESTED = 'SIDEBAR_OPEN_REQUESTED'
export const SIDEBAR_CLOSE_REQUESTED = 'SIDEBAR_CLOSE_REQUESTED'

export const toggleSidebar = () => {
  return {
    type: SIDEBAR_TOGGLE_REQUESTED,
    payload: {}
  }
}

export const openSidebar = () => {
  return {
    type: SIDEBAR_OPEN_REQUESTED,
    payload: {open: true}
  }
}

export const closeSidebar = () => {
  return {
    type: SIDEBAR_CLOSE_REQUESTED,
    payload: {open: false}
  }
}
