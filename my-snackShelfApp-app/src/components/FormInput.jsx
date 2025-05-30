import React, { useEffect, useReducer, useState } from "react";

let initialState = {
  title: "",
  category: "",
  price: "",
  rating: "",
  createdAt: "",
};
function dataHandler(state, action) {
  switch (action.type) {
    case "update":
      return { ...state, [action.feild]: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
function FormInput() {
  let [snacks, setSnack] = useState([]);
  let [state, dispatch] = useReducer(dataHandler, initialState);
//   useEffect(() => AppendTofirebase(), [state]);
  function handleChange(event) {
    let { name, value } = event.target;
    dispatch({ type: "update", feild: name, payload: value });
  }
  async function AppendTofirebase() {
    try {
        let url = "https://snackshelf-eda12-default-rtdb.asia-southeast1.firebasedatabase.app/Snack.json"
        await fetch(url,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(state)
    })
    } catch (error) {
        alert(error.message)
    } 
  }
  function handleSubmit(event) {
    event.preventDefault();
    setSnack([...snacks, state]);
    AppendTofirebase()
  }
  return (
    <>
      <h3>Create Snack..</h3>
      <div id="formInput">
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="title"
              value={state.title}
              placeholder="Enter Title"
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="category"
              value={state.category}
              placeholder="Enter Category"
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="number"
              name="price"
              value={state.price}
              placeholder="Enter the Price"
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="number"
              name="rating"
              value={state.rating}
              placeholder="Enter the Rating"
              onChange={handleChange}
            />
          </label>
          <label>
            <input
              type="text"
              name="createdAt"
              value={state.createdAt}
              placeholder="Enter Date"
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
}

export { FormInput };
