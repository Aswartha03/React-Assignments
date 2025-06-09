const initialState = {
  data: [],
  loading: null,
  error: null,
};

function dataFetcher(state = initialState, action) {
    console.log("inside reducer")
  switch (action.type) {
    case 'fetch_success':
      return ({ ...state, data: action.payload, loading: false });
    case 'error':
      return ({ ...state, error: action.error, loading: false, data: [] });
    case 'fetch_Start':
      return ({ ...state, loading: true });
    default:
        console.log("default")
      return state;
      
  }
}
export { dataFetcher };
