export const SIDEBAR_TOGGLE_REQUESTED = 'SIDEBAR_TOGGLE_REQUESTED'
export const SIDEBAR_TOGGLE_REQUESTED2 = 'SIDEBAR_TOGGLE_REQUESTED2'
export const SIDEBAR_OPEN_REQUESTED = 'SIDEBAR_OPEN_REQUESTED'
export const SIDEBAR_CLOSE_REQUESTED = 'SIDEBAR_CLOSE_REQUESTED'

export function getView(width) {
  let newView = 'MobileView'
  if (width > 1220) {
    newView = 'DesktopView'
  } else if (width > 767) {
    newView = 'TabView'
  }
  return newView
}

export const toggleSidebar = () => {
  return {
    type: SIDEBAR_TOGGLE_REQUESTED,
    payload: {}
  }
}

export const toggleSidebar2 = (windowSize) => {
  const view = getView(windowSize.windowWidth)
  return {
    type: SIDEBAR_TOGGLE_REQUESTED2,
    payload: {view}
  }
}

export const openSidebar = () => {
  return {
    type: SIDEBAR_OPEN_REQUESTED,
    payload: { open: true }
  }
}

export const closeSidebar = () => {
  return {
    type: SIDEBAR_CLOSE_REQUESTED,
    payload: { open: false }
  }
}
