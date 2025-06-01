let initialState = { title: "", status: "", id: "" };

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "update":
      return {
        ...state,
        ...action.payload,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
export default todoReducer;
