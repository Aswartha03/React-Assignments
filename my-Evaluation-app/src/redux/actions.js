export const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "fetch_Start" });
    try {
      let response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
      );
      let result = await response.json();
      let arr = result.results;
      dispatch({ type: "fetch_success", payload: arr });
    } catch (error) {
      dispatch({ type: "error", error: "Error Occures!!!" });
    }
  };
};
