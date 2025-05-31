let initialState = { count: 0 };
function countReducer(state = initialState, action) {
  switch (action.type) {
    case "incre":
      return { count: state.count + 1 };
    case "decre":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
export { countReducer };
