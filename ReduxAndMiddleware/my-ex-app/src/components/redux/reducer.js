

let initialState = { loading: false, data: null, error: null };

function fetchReducer(state = initialState, action) {
  switch (action.type) {
    case "fetch_start":
      return { ...state,loading: true };
    case "fetch_success":
      return { loading: false, data: action.payload, error: null };
    case "error":
      return { loading: false, data: null, error: action.error};
    default:
      return state;
  }
}
export { fetchReducer };
