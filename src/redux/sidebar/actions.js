const actions = {
  TOGGLE_SIDEBAR: 'TOGGLE_SIDEBAR',
  toggleSidebar: status => ({
    type: actions.TOGGLE_SIDEBAR,
    payload: { status }
  })
}
export default actions
