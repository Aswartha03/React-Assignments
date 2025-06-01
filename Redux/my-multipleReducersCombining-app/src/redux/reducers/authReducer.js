let initialAuthState = { isActivated: false };

function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case "LOGIN":
      return { isActivated: !state.isActivated};
    case "LOGOUT":
      return { isActivated: !state.isActivated};
    default:
      return state;
  }
}
export default authReducer;
